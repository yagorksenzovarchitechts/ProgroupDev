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
    }
} 