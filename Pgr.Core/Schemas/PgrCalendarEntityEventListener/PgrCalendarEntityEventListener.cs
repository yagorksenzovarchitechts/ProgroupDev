using System;
using System.Collections.Generic;
using System.Linq;
using Common.Logging;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace Terrasoft.Configuration
{
    [EntityEventListener(SchemaName = "Calendar")]
    public class PgrCalendarEntityEventListener : BaseEntityEventListener
    {
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);

            var calendar = sender as Calendar;
            CopyCalendarDetails(calendar.UserConnection, calendar.Id);
        }

        #region Methods: Private
        
        private void CopyCalendarDetails(UserConnection userConnection, Guid newCalendarId)
        {
            try
            {
                var baseCalendarId = GetBaseCalendarId(userConnection);

                if (baseCalendarId != Guid.Empty)
                {
                    var daysData = ReadBaseCalendarDays(userConnection, baseCalendarId);
                    CreateCalendarDetailsBatch(userConnection, newCalendarId, daysData);
                }
            }
            catch (Exception e)
            {
                LogManager.GetLogger("Error").Error(e);
            }
        }

        private Guid GetBaseCalendarId(UserConnection userConnection)
        {
            var sysSetting = (Guid) Core.Configuration.SysSettings.GetValue(userConnection, "BaseCalendar");
            return sysSetting;
        }

        private List<CalendarDayData> ReadBaseCalendarDays(UserConnection userConnection, Guid calendarId)
        {
            var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "DayInCalendar");

            esq.AddColumn("Id");
            esq.AddColumn("DayOfWeek");
            esq.AddColumn("DayType");
            esq.AddColumn("[WorkingTimeInterval:DayInCalendar:Id].From").Name = "IntervalFrom";
            esq.AddColumn("[WorkingTimeInterval:DayInCalendar:Id].To").Name = "IntervalTo";

            esq.Filters.Add(esq.CreateFilterWithParameters(
                FilterComparisonType.Equal,
                "Calendar",
                calendarId));

            var entities = esq.GetEntityCollection(userConnection);

            if (entities.IsEmpty())
            {
                return new List<CalendarDayData>();
            }

            return entities
                .Select(entity => new CalendarDayData
                {
                    DayOfWeekId = entity.GetTypedColumnValue<Guid>("DayOfWeekId"),
                    DayTypeId = entity.GetTypedColumnValue<Guid>("DayTypeId"),
                    IntervalFrom = entity.GetTypedColumnValue<DateTime>("IntervalFrom"),
                    IntervalTo = entity.GetTypedColumnValue<DateTime>("IntervalTo")
                })
                .ToList();
        }

        private void CreateCalendarDetailsBatch(UserConnection userConnection, Guid newCalendarId,
            List<CalendarDayData> daysData)
        {
            var groupedDays = daysData
                .Where(d => d.DayOfWeekId != Guid.Empty)
                .GroupBy(d => d.DayOfWeekId);
            foreach (var dayGroup in groupedDays)
            {
                var dayOfWeekId = dayGroup.Key;
                var dayTypeId = dayGroup.First().DayTypeId;
                var dayInCalendarId = Guid.NewGuid();
                new Insert(userConnection)
                    .Into("DayInCalendar")
                    .Set("Id", Column.Parameter(dayInCalendarId))
                    .Set("CalendarId",
                        Column.Parameter(newCalendarId))
                    .Set("DayOfWeekId",
                        Column.Parameter(dayOfWeekId))
                    .Set("DayTypeId", Column.Parameter(dayTypeId.IsNotEmpty() 
                        ? dayTypeId : (object) DBNull.Value))
                    .Execute();
                dayGroup
                    .Where(d => d.IntervalFrom != DateTime.MinValue && 
                                d.IntervalTo != DateTime.MinValue)
                    .ToList()
                    .ForEach(dayData =>
                        new Insert(userConnection)
                            .Into("WorkingTimeInterval")
                            .Set("Id", Column.Parameter(Guid.NewGuid()))
                            .Set("DayInCalendarId", Column.Parameter(dayInCalendarId))
                            .Set("From", Column.Parameter(dayData.IntervalFrom))
                            .Set("To", Column.Parameter(dayData.IntervalTo))
                            .Execute()
                    );
            }
            
            
        }
        
        #endregion  

        private class CalendarDayData
        {
            public Guid DayOfWeekId { get; set; }
            public Guid DayTypeId { get; set; }
            public DateTime IntervalFrom { get; set; }
            public DateTime IntervalTo { get; set; }
        }
    }
}