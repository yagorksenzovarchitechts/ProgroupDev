using System;

namespace Pgr.Core
{
    public class PgrConstants
    {
        public static class AccountClassification
        {
            public static readonly Guid A = new Guid("9837175b-ef69-4dbd-8715-105f2a2c7aaf");
            public static readonly Guid B = new Guid("71dd3b9e-423e-454d-987f-48377d901dba");
            public static readonly Guid C = new Guid("9c1460eb-4b7f-40df-aca2-8ee0609f41c1");
        }
        
        public static class Calendar
        {
            public static readonly Guid StandardCalendar = new Guid("f0ff1f0e-f46b-1410-1787-0026185bfcd3");
        }

        public static class ActivityCategory
        {
            /// <summary>ActivityCategory "369" — marker of a 3-6-9 alert task.</summary>
            public static readonly Guid Category369 = new Guid("8038a396-7825-e011-8165-00155d043204");

            /// <summary>ActivityCategory "Measure" — marker of a 3-6-9 measure (corrective action) task.</summary>
            public static readonly Guid Measure = new Guid("bee620f7-f3f7-47e4-81a3-5b2a9a030413");
        }

        /// <summary>Base Activity.Type values (ActivityType lookup, standard Creatio seed).</summary>
        public static class ActivityType
        {
            /// <summary>"Task" — the type of a genuine 3-6-9 alert/measure task. Used to keep other
            /// activity types (e.g. an Email mis-tagged with ActivityCategory 369) from being
            /// treated as the open alert task.</summary>
            public static readonly Guid Task = new Guid("fbe0acdc-cfc0-df11-b00f-001d60e938c6");
        }

        /// <summary>
        ///     DayType lookup records (bound in Data/DayType_LookupData). "Working day" and
        ///     "Reduced working" share the same NonWorking/IsWeekend flags, so a half (shortened)
        ///     day can only be told apart from a full day by this Id.
        /// </summary>
        public static class DayType
        {
            /// <summary>"Day off" / "Ruhetag" — non-working day (NonWorking = IsWeekend = true).</summary>
            public static readonly Guid DayOff = new Guid("078c9b1e-9312-43ef-b890-e5298db62827");

            /// <summary>"Working day" / "Arbeitstag" — full working day.</summary>
            public static readonly Guid WorkingDay = new Guid("e0c666ad-a59e-4625-89e6-5e0bf75dad2a");

            /// <summary>"Reduced working" / "Reduzierte Arbeitszeit" — half working day (counts as 0.5).</summary>
            public static readonly Guid ReducedWorking = new Guid("e7a91a43-1156-4cd1-aa35-131783f9980e");
        }
    }
} 