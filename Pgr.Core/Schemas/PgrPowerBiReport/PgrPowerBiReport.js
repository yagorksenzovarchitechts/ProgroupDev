define("PgrPowerBiReport", ["@creatio-devkit/common"], function(sdk) {

    require.config({
        paths: {
            "pgrMsalBrowser":   "https://cdn.jsdelivr.net/npm/@azure/msal-browser@2/lib/msal-browser.min",
            "pgrPowerBiClient": "https://cdn.jsdelivr.net/npm/powerbi-client@2/dist/powerbi.min"
        }
    });

    function loadLibs() {
        return new Promise(function(resolve, reject) {
            require(["pgrMsalBrowser", "pgrPowerBiClient"],
                function(msalLib, pbiLib) { resolve({ msal: msalLib, pbi: pbiLib }); },
                function(err) { reject(err); });
        });
    }

    function parseCsvColumn(csv) {
        var lines = (csv || "").split(/\r?\n/).filter(function(l){ return l.trim().length > 0; });
        if (lines.length <= 1) { return []; }                  
        return lines.slice(1).map(function(l){
            var v = l.trim();
            if (v.charAt(0) === '"' && v.charAt(v.length - 1) === '"') {
                v = v.substring(1, v.length - 1).replace(/""/g, '"');
            }
            return v;
        });
    }

    class PgrPowerBiReport extends HTMLElement {
        constructor() {
            super();
            this._cfg = null; this._report = null;
            this._libs = null; this._pbiService = null; this._lastSync = null;
        }

        set syncCommand(v) { if (v && v !== this._lastSync) { this._lastSync = v; this._syncCatalog(); } }
        get syncCommand() { return this._lastSync; }

        async connectedCallback() {
            this.style.cssText = "display:block;width:100%;height:100%;";
            this._container = document.createElement("div");
            this._container.style.cssText = "width:100%;height:100%;";
            this.appendChild(this._container);
            try {
                var http = new sdk.HttpClientService();
                var resp = await http.get("rest/PgrPowerBiService/GetConfig");
                this._cfg = JSON.parse(resp.body.GetConfigResult);

                this._libs = await loadLibs();
                var token = await this._acquireToken();
                this._embed(token);
            } catch (e) {
                console.error("PowerBI init failed", e);
                this._container.textContent = "Не удалось загрузить отчёт Power BI (см. консоль).";
            }
        }

        disconnectedCallback() {
            if (this._report && this._pbiService) { this._pbiService.reset(this._container); }
        }

        async _acquireToken() {
            var msal = this._libs.msal;
            var pca = new msal.PublicClientApplication({
                auth: {
                    clientId: this._cfg.clientId,
                    authority: "https://login.microsoftonline.com/" + this._cfg.tenantId,
                    redirectUri: window.location.origin
                },
                cache: { cacheLocation: "localStorage" }
            });
            var scopes = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];
            var account = pca.getAllAccounts()[0];
            var result;
            try {
                result = account ? await pca.acquireTokenSilent({ scopes: scopes, account: account })
                                 : await pca.loginPopup({ scopes: scopes });
            } catch (e) { result = await pca.acquireTokenPopup({ scopes: scopes }); }
            return result.accessToken;
        }

        _embed(token) {
            var pbi = this._libs.pbi;
            var models = pbi.models;
            this._pbiService = new pbi.service.Service(
                pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory
            );
            var config = {
                type: "report",
                tokenType: models.TokenType.Aad,
                accessToken: token,
                id: this._cfg.reportId,
                embedUrl: "https://app.powerbi.com/reportEmbed?reportId=" + this._cfg.reportId + "&ctid=" + this._cfg.tenantId,
                settings: { panes: { filters: { visible: false } } }
            };
            if (this._cfg.pageName) { config.pageName = this._cfg.pageName; }
            this._pbiService.reset(this._container);
            this._report = this._pbiService.embed(this._container, config);
            var self = this;
            this._report.on("loaded", function(){ self._applyUserFilters(); });
            this._report.on("error", function(e){ console.error("PowerBI error", e.detail); });
        }

        async _applyUserFilters() {
            if (!this._report || !this._cfg) { return; }
            var filters = this._cfg.filters || [];
            if (!filters.length) { return; }
            var pages = await this._report.getPages();
            var page = pages.filter(function(p){ return p.isActive; })[0] || pages[0];
            var visuals = await page.getVisuals();
            var slicers = visuals.filter(function(v){ return v.type === "slicer"; });
            for (var i = 0; i < slicers.length; i++) {
                var slicer = slicers[i];
                var state = await slicer.getSlicerState();
                var target = state.targets && state.targets[0];
                if (!target) { continue; }
                var match = null;
                for (var j = 0; j < filters.length; j++) {
                    if (filters[j].table === target.table && filters[j].column === target.column) { match = filters[j]; break; }
                }
                if (!match) { continue; }
                var vals = (match.values || []).filter(Boolean);
                if (!vals.length) { continue; }
                await slicer.setSlicerState({
                    filters: [{
                        $schema: "http://powerbi.com/product/schema#basic",
                        target: { table: target.table, column: target.column },
                        operator: "In",
                        values: vals
                    }]
                });
            }
        }

        async _collectCatalog() {
            var models = this._libs.pbi.models;
            var pages = await this._report.getPages();
            var out = [];
            for (var p = 0; p < pages.length; p++) {
                var visuals = await pages[p].getVisuals();
                var slicers = visuals.filter(function(v){ return v.type === "slicer"; });
                for (var i = 0; i < slicers.length; i++) {
                    var v = slicers[i], entry = { title: v.title || v.name, table: "", column: "", values: [] };
                    try {
                        var st = await v.getSlicerState();
                        var t = st.targets && st.targets[0];
                        if (t) { entry.table = t.table || ""; entry.column = t.column || ""; }
                        else { continue; }                     
                    } catch (e) { continue; }
                    try {
                        var exp = await v.exportData(models.ExportDataType.Summarized);
                        entry.values = parseCsvColumn(exp.data);
                    } catch (e) { console.warn("exportData failed:", entry.title, e); }
                    if (entry.table && entry.column) { out.push(entry); }
                }
            }
            return out;
        }

        async _syncCatalog() {
            if (!this._report) { console.warn("Report was not ready"); return; }
            try {
                var catalog = await this._collectCatalog();
                var http = new sdk.HttpClientService();
                var resp = await http.post("rest/PgrPowerBiService/SyncCatalog", { slicers: catalog });
                console.log("SyncCatalog OK:", resp.body.SyncCatalogResult);
            } catch (e) {
                console.error("SyncCatalog failed", e);
            }
        }
    }

    customElements.define("pgr-powerbi-report", PgrPowerBiReport);

    sdk.registerViewElement({
        type: "pgr.PowerBIReport",
        selector: "pgr-powerbi-report",
        inputs: { syncCommand: {} }
    });

    return {};
});
