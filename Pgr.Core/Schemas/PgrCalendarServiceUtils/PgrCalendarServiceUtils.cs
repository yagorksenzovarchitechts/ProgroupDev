using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using Terrasoft.Configuration;
using Terrasoft.Configuration.Calendars;

namespace Pgr.Core
{
	/// <summary>
	/// Utilities for calendar management.
	/// </summary>
	public class PgrCalendarServiceUtils
	{
		/// <summary>
		/// User connection.
		/// </summary>
		private readonly UserConnection _userConnection;

		/// <summary>
		/// Calendar utilities.
		/// </summary>
		/// <param name="userConnection"> User connection. </param>
		public PgrCalendarServiceUtils(UserConnection userConnection)
		{
			_userConnection = userConnection;
		}

		/// <summary>
		/// Next day off.
		/// </summary>
		private DateTime _nextDayOff;

		/// <summary>
		/// Type of the next day off.
		/// </summary>
		private bool _nextDayOffType;
		
		/// <summary>
		/// Holiday and shortened days.
		/// </summary>
		private List<DayOff> _daysOffList; 

		/// <summary>
		/// Weekends.
		/// </summary>
		private List<string> _weekendsList;

		/// <summary>
		/// Calendar.
		/// </summary>
		private Guid _calendarId;

		/// <summary>
		/// Add working days.
		/// </summary>
		/// <param name="startDate"> Start date. </param>
		/// <param name="numberOfDays"> Number of days. </param>
		/// <param name="calendarId"> Calendar Id. </param>
		/// <returns> End date. </returns>
		public DateTime AddWorkingDays(DateTime startDate, int numberOfDays, Guid calendarId)
		{
			_calendarId = calendarId;
			GetWeekends();
			GetDaysOff();
			GetNextDayOff(startDate);
			if (IsDayOff(startDate)) 
			{
    			startDate = startDate.Date;
			}				

			var dateOfEnd = startDate;

			while (numberOfDays != 0)
			{
				if(IsDayOff(startDate))
				{
					startDate = startDate.AddDays(1);
					dateOfEnd = startDate;
					continue;
				}
				dateOfEnd = dateOfEnd.AddDays(1);
				if (!IsDayOff(dateOfEnd))
				{
					numberOfDays--;
				}
			}

			return dateOfEnd;
		}		

		/// <summary>
		/// Get the number of working days.
		/// </summary>
		/// <param name="startDate"> Start date. </param>
		/// <param name="endDate"> End date. </param>
		/// <param name="calendarId"> Calendar Id. </param>
		/// <returns> Number of working days. </returns>
		public int GetWorkingDays(DateTime startDate, DateTime endDate, Guid calendarId)
		{
            if (startDate > endDate)
            {
                return 0;
            }
            _calendarId = calendarId;
			var timeIntervals = new List<TimeInterval>();
			var dayOfWeekSelect = GetDayOfWeekSelect();
			var dayOffSelect = GetDayOffSelect(startDate, endDate);
			var selectDays = dayOfWeekSelect.UnionAll(dayOffSelect) as Select;

			using (var dbExecutor = _userConnection.EnsureDBConnection())
			{
				using (var dataReader = selectDays.ExecuteReader(dbExecutor))
				{
					while (dataReader.Read())
					{
						timeIntervals.Add(new TimeInterval
						{
							Date = dataReader["Date"] == DBNull.Value
								? (DateTime?)null
								: (DateTime)dataReader["Date"],
							DayOfWeek = dataReader.GetColumnValue<string>("DayOfWeek"),
							From = dataReader.GetColumnValue<string>("From"),
							To = dataReader.GetColumnValue<string>("To"),
							DiffTime = dataReader.GetColumnValue<int>("DateDiff"),
							IsWeekend = dataReader.GetColumnValue<bool>("IsWeekend")
						});
					}
				}
			}

            var result = EachDay(startDate.AddDays(1), endDate.AddDays(-1)).Count(day => IsWorkingDay(timeIntervals, day));

            if (timeIntervals.Exists(interval =>
                (IsCommonWorkingDay(interval, startDate)
                || IsShortenedDay(interval, startDate))
                && TimeSpan.TryParse(interval.To, out var toSpan)
                && toSpan > startDate.TimeOfDay)
                && !timeIntervals.Exists(interval => IsOffDay(interval, startDate)))
            {
                result++;
            }
			
            if (timeIntervals.Exists(interval =>
                (IsCommonWorkingDay(interval, endDate)
                || IsShortenedDay(interval, endDate))
                && TimeSpan.TryParse(interval.From, out var fromSpan)
                && fromSpan < endDate.TimeOfDay)
                && !timeIntervals.Exists(interval => IsOffDay(interval, endDate)))
            {
                result++;
            }

            return result;
		}

        /// <summary>
        /// Checks whether the day is a working day (full or shortened).
        /// </summary>
        /// <param name="intervals">Time intervals.</param>
        /// <param name="day">Day.</param>
        /// <returns></returns>
        private bool IsWorkingDay(List<TimeInterval> intervals, DateTime day)
        {
            return intervals.Exists(interval => IsShortenedDay(interval, day))
                || (intervals.Exists(interval => IsCommonWorkingDay(interval, day)) && !intervals.Exists(interval => IsOffDay(interval, day)));
        }

        /// <summary>
        /// Checks whether the day is a working day (full).
        /// </summary>
        /// <param name="interval">Time interval.</param>
        /// <param name="day">Day.</param>
        /// <returns></returns>
        private bool IsCommonWorkingDay(TimeInterval interval, DateTime day)
        {
            return interval.Date == null && !interval.IsWeekend && interval.DayOfWeek == day.DayOfWeek.ToString();
        }

        /// <summary>
        /// Checks whether the day is a shortened day.
        /// </summary>
        /// <param name="interval">Time interval.</param>
        /// <param name="day">Day.</param>
        /// <returns></returns>
        private bool IsShortenedDay(TimeInterval interval, DateTime day)
        {
            return interval.Date == day && !interval.IsWeekend;
        }

        /// <summary>
        /// Checks whether the day is a holiday day off.
        /// </summary>
        /// <param name="interval">Time interval.</param>
        /// <param name="day">Day.</param>
        /// <returns></returns>
        private bool IsOffDay(TimeInterval interval, DateTime day)
        {
            return interval.IsWeekend && interval.Date == day.Date;
        }

        /// <summary>
        /// Get the number of working minutes.
        /// </summary>
        /// <param name="startDate"> Start date. </param>
        /// <param name="endDate"> End date. </param>
        /// <param name="calendarId"> Calendar Id. </param>
        /// <returns> Number of working minutes. </returns>
        public int GetWorkingMinutes(DateTime startDate, DateTime endDate, Guid calendarId)
		{
			var workMins = 0;
			_calendarId = calendarId;
			var timeIntervals = new List<TimeInterval>();
			var startTime = startDate.TimeOfDay;
			var endTime = endDate.TimeOfDay;

			if (startDate > endDate ||
				startDate == default(DateTime) ||
				endDate == default(DateTime))
			{
				return workMins;
			}

			var dayOfWeekSelect = GetDayOfWeekSelect();
			var dayOffSelect = GetDayOffSelect(startDate, endDate);
			var selectDays = dayOfWeekSelect.UnionAll(dayOffSelect) as Select;

			using (var dbExecutor = _userConnection.EnsureDBConnection())
			{
				using (var dataReader = selectDays.ExecuteReader(dbExecutor))
				{
					while (dataReader.Read())
					{
						timeIntervals.Add(new TimeInterval
						{
							Date = dataReader["Date"] == DBNull.Value
								? (DateTime?)null
								: (DateTime)dataReader["Date"],
							DayOfWeek = dataReader.GetColumnValue<string>("DayOfWeek"),
							From = dataReader.GetColumnValue<string>("From"),
							To = dataReader.GetColumnValue<string>("To"),
							DiffTime = dataReader.GetColumnValue<int>("DateDiff"),
							IsWeekend = dataReader.GetColumnValue<bool>("IsWeekend")
						});
					}
				}
			}

			if (startDate.Date.Equals(endDate.Date))
			{
				var intervals = timeIntervals.FindAll(timeInterval =>
					timeInterval.Date == startDate.Date);

				if (intervals.Count == 0)
				{
					intervals = timeIntervals.FindAll(item =>
						item.DayOfWeek == startDate.DayOfWeek.ToString() &&
						item.Date == null);
				}

				if (intervals[0].From == null ||
					intervals[0].To == null ||
					intervals[0].IsWeekend)
				{
					return workMins;
				}

				foreach (var interval in intervals)
				{
					if (!TimeSpan.TryParse(interval.From, out var intervalFrom) ||
						!TimeSpan.TryParse(interval.To, out var intervalTo))
					{
						continue;
					}
					var timeSpan = TimeSpan.Zero;

					if (intervalFrom >= startTime &&
						intervalTo <= endTime)
					{
						timeSpan = intervalTo.Subtract(intervalFrom);
					}
					else if (intervalFrom < startTime &&
						intervalTo > endTime)
					{
						timeSpan = endTime.Subtract(startTime);
					}
					else if (intervalFrom <= startTime &&
						intervalTo > startTime)
					{
						timeSpan = intervalTo.Subtract(startTime);
					}
					else if (intervalFrom < endTime &&
						intervalTo >= endTime)
					{
						timeSpan = endTime.Subtract(intervalFrom);
					}

					workMins += (int)timeSpan.TotalMinutes;
				}

				return workMins;
			}


			foreach (var day in EachDay(startDate.AddDays(1), endDate.AddDays(-1)))
			{
				workMins += timeIntervals.Find(timeInterval => timeInterval.Date == day) == null
					? timeIntervals.Where(timeInterval =>
							timeInterval.DayOfWeek == day.DayOfWeek.ToString() &&
							timeInterval.Date == null &&
							!timeInterval.IsWeekend)
						.Sum(item => item.DiffTime)
					: timeIntervals.Where(timeInterval =>
							timeInterval.Date == day &&
							!timeInterval.IsWeekend)
						.Sum(item => item.DiffTime);
			}

			var startIntervalResults = timeIntervals.FindAll(timeInterval =>
				timeInterval.Date == startDate.Date);

			if (startIntervalResults.Count == 0)
			{
				startIntervalResults = timeIntervals.FindAll(timeInterval =>
					timeInterval.DayOfWeek == startDate.DayOfWeek.ToString() &&
					timeInterval.Date == null);
			}

			if (startIntervalResults[0].From != null &&
				startIntervalResults[0].To != null &&
				!startIntervalResults[0].IsWeekend)
			{
				foreach (var startIntervalResult in startIntervalResults)
				{
					if (!TimeSpan.TryParse(startIntervalResult.From, out var startIntervalFrom) ||
						!TimeSpan.TryParse(startIntervalResult.To, out var startIntervalTo))
					{
						continue;
					}
					var timeSpan = TimeSpan.Zero;

					if (startIntervalFrom >= startTime)
					{
						timeSpan = startIntervalTo.Subtract(startIntervalFrom);
					}
					else if (startIntervalTo >= startTime)
					{
						timeSpan = startIntervalTo.Subtract(startTime);
					}

					workMins += (int)timeSpan.TotalMinutes;
				}
			}

			var endIntervalResults = timeIntervals.FindAll(timeInterval =>
				timeInterval.Date == endDate.Date);

			if (endIntervalResults.Count == 0)
			{
				endIntervalResults = timeIntervals.FindAll(timeInterval =>
					timeInterval.DayOfWeek == endDate.DayOfWeek.ToString() &&
					timeInterval.Date == null);
			}

			if (endIntervalResults[0].From != null &&
				endIntervalResults[0].To != null &&
				!endIntervalResults[0].IsWeekend)
			{
				foreach (var endIntervalResult in endIntervalResults)
				{
					if (!TimeSpan.TryParse(endIntervalResult.From, out var endIntervalFrom) ||
						!TimeSpan.TryParse(endIntervalResult.To, out var endIntervalTo))
					{
						continue;
					}
					var timeSpan = TimeSpan.Zero;

					if (endIntervalTo <= endTime)
					{
						timeSpan = endIntervalTo.Subtract(endIntervalFrom);
					}
					else if (endIntervalFrom <= endTime)
					{
						timeSpan = endTime.Subtract(endIntervalFrom);
					}

					workMins += (int)timeSpan.TotalMinutes;
				}
			}

			return workMins;
		}

		/// <summary>
		/// Checks whether the given day is a working day according to the calendar.
		/// A shortened (pre-holiday) day counts as a working day; a holiday or a weekend does not.
		/// </summary>
		/// <param name="date"> Date to check. </param>
		/// <param name="calendarId"> Calendar Id. </param>
		/// <returns> <c>true</c> if the day is a working day. </returns>
		public bool IsWorkingDay(DateTime date, Guid calendarId)
		{
			_calendarId = calendarId;
			GetWeekends();
			GetDaysOff();

			var dayOff = _daysOffList.FirstOrDefault(x => x.Date == date.Date);
			if (dayOff != null)
			{
				// A record in DayOff with IsWeekend == false is a shortened working day.
				return !dayOff.IsWeekend;
			}

			return !_weekendsList.Contains(date.DayOfWeek.ToString());
		}

		/// <summary>
		/// Resolves the DayType Id for a date in the given calendar: a specific-date override in
		/// DayOff takes precedence, otherwise the weekly DayInCalendar entry for that day of week.
		/// Needed to tell a full working day from a shortened ("Reduced working") one, since both
		/// share the same IsWeekend / NonWorking flags — see <see cref="PgrConstants.DayType" />.
		/// </summary>
		/// <param name="date"> Date to classify. </param>
		/// <param name="calendarId"> Calendar Id. </param>
		/// <returns> DayType Id, or <see cref="Guid.Empty" /> when the calendar has no entry. </returns>
		public Guid GetDayTypeId(DateTime date, Guid calendarId)
		{
			_calendarId = calendarId;

			// Specific-date override (holiday / shortened day) in DayOff.
			var dayOffSelect = new Select(_userConnection)
					.Top(1)
					.Column("do", "DayTypeId").As("DayTypeId")
				.From("DayOff").As("do")
				.Where("do", "CalendarId").IsEqual(Column.Parameter(_calendarId))
					.And("do", "Date").IsEqual(Column.Parameter(date.Date)) as Select;

			var dayTypeId = dayOffSelect.ExecuteScalar<Guid>();
			if (dayTypeId != Guid.Empty)
			{
				return dayTypeId;
			}

			// Weekly template for this day of week.
			var weekdaySelect = new Select(_userConnection)
					.Top(1)
					.Column("dic", "DayTypeId").As("DayTypeId")
				.From("DayInCalendar").As("dic")
				.InnerJoin("DayOfWeek").As("dow")
					.On("dic", "DayOfWeekId").IsEqual("dow", "Id")
				.Where("dic", "CalendarId").IsEqual(Column.Parameter(_calendarId))
					.And("dow", "Code").IsEqual(Column.Parameter(date.DayOfWeek.ToString())) as Select;

			return weekdaySelect.ExecuteScalar<Guid>();
		}

		/// <summary>
		/// Checks whether the day is a day off.
		/// </summary>
		/// <param name="date"> Date. </param>
		private bool IsDayOff(DateTime date)
		{
			if (date.Date != _nextDayOff.Date)
			{
				if(_daysOffList.Any(x => x.Date == date.Date))
				{
					return _daysOffList.FirstOrDefault(x => x.Date == date.Date).IsWeekend;
				}
				return _weekendsList.Contains(date.DayOfWeek.ToString());
			}

			var res = _nextDayOffType;
			GetNextDayOff(date);

			return res;
		}

		/// <summary>
		/// Gets the weekends.
		/// </summary>
		private void GetWeekends()
		{
			_weekendsList = new List<string>();

			var selectQuery = new Select(_userConnection)
					.Column("dow", "Code").As("Code")
				.From("DayOfWeek").As("dow")
				.InnerJoin("DayInCalendar").As("dic")
					.On("dow", "Id").IsEqual("dic", "DayOfWeekId")
				.InnerJoin("DayType").As("dt")
					.On("dic", "DayTypeId").IsEqual("dt", "Id")
				.Where("dt", "IsWeekend").IsEqual(Column.Parameter(true))
					.And("dic", "CalendarId").IsEqual(Column.Parameter(_calendarId)) as Select;

			using (var dbExecutor = _userConnection.EnsureDBConnection())
			{
				using (var executeReader = selectQuery.ExecuteReader(dbExecutor))
				{
					while (executeReader.Read())
					{
						_weekendsList.Add(executeReader["Code"].ToString());
					}
				}
			}
		}
		
		/// <summary>
		/// Gets the holiday and shortened days.
		/// </summary>
		private void GetDaysOff()
		{
			_daysOffList = new List<DayOff>();
			
			var selectWeekDaysQuery = new Select(_userConnection)
					.Column("do", "Date").As("Date")
					.Column("dt", "IsWeekend").As("isWeekend")
				.From("DayOff").As("do")
				.InnerJoin("DayType").As("dt")
					.On("do", "DayTypeId").IsEqual("dt", "Id")
				.Where("do", "CalendarId").IsEqual(Column.Parameter(_calendarId))
				.OrderByAsc("do", "Date") as Select;

			using (var dbExecutor = _userConnection.EnsureDBConnection())
			{
				using (var executeReader = selectWeekDaysQuery.ExecuteReader(dbExecutor))
				{
					while (executeReader.Read())
					{
						_daysOffList.Add(new DayOff
						{
							Date = (DateTime)executeReader["Date"],
							IsWeekend = (bool)executeReader["isWeekend"]
						});
					}
				}
			}
		}

		/// <summary>
		/// Gets the next day off.
		/// </summary>
		/// <param name="currentDate"> Current date. </param>
		private void GetNextDayOff(DateTime currentDate)
		{
			var selectWeekDaysQuery = new Select(_userConnection)
					.Top(1)
					.Column("do", "Date").As("Date")
					.Column("dt", "IsWeekend").As("isWeekend")
				.From("DayOff").As("do")
				.InnerJoin("DayType").As("dt")
					.On("do", "DayTypeId").IsEqual("dt", "Id")
				.Where("do", "CalendarId").IsEqual(Column.Parameter(_calendarId))
					.And("do", "Date").IsGreater(Column.Parameter(currentDate))
				.OrderByAsc("do", "Date") as Select;

			using (var dbExecutor = _userConnection.EnsureDBConnection())
			{
				using (var executeReader = selectWeekDaysQuery.ExecuteReader(dbExecutor))
				{
					while (executeReader.Read())
					{
						_nextDayOff = (DateTime)executeReader["Date"];
						_nextDayOffType = (bool)executeReader["isWeekend"];
					}
				}
			}
		}

		/// <summary>
		/// Gets the Select of days of the week.
		/// </summary>
		private Select GetDayOfWeekSelect()
		{
			var selectQuery = new Select(_userConnection)
				.Column(Column.Const(null)).As("Date")
				.Column("DOW", "Code").As("DayOfWeek")
				.Column("WTI", "From").As("From")
				.Column("WTI", "To").As("To")
				.Column(Func.DateDiff(DateDiffQueryFunctionInterval.Minute,
					Column.SourceColumn("WTI", "From"),
					Column.SourceColumn("WTI", "To")
				)).As("DateDiff")
				.Column("DT", "IsWeekend").As("IsWeekend")
			.From("DayOfWeek").As("DOW")
			.InnerJoin("DayInCalendar").As("DIC")
				.On("DOW", "Id").IsEqual("DIC", "DayOfWeekId")
			.InnerJoin("DayType").As("DT")
				.On("DIC", "DayTypeId").IsEqual("DT", "Id")
			.LeftOuterJoin("WorkingTimeInterval").As("WTI")
				.On("DIC", "Id").IsEqual("WTI", "DayInCalendarId")
			.Where("DIC", "CalendarId").IsEqual(Column.Parameter(_calendarId)) as Select;

			return selectQuery;
		}

		/// <summary>
		/// Gets the Select of days off.
		/// </summary>
		/// <param name="startDate"> Start date. </param>
		/// <param name="endDate"> End date. </param>
		private Select GetDayOffSelect(DateTime startDate, DateTime endDate)
		{
			var selectQuery = new Select(_userConnection)
				.Column("DO", "Date").As("Date")
				.Column(Column.Const(null)).As("DayOfWeek")
				.Column("WTI", "From").As("From")
				.Column("WTI", "To").As("To")
				.Column(Func.DateDiff(DateDiffQueryFunctionInterval.Minute,
					Column.SourceColumn("WTI", "From"),
					Column.SourceColumn("WTI", "To")
				)).As("DateDiff")
				.Column("DT", "IsWeekend").As("IsWeekend")
			.From("DayOff").As("DO")
			.InnerJoin("DayType").As("DT")
				.On("DO", "DayTypeId").IsEqual("DT", "Id")
			.LeftOuterJoin("WorkingTimeInterval").As("WTI")
				.On("DO", "Id").IsEqual("WTI", "DayOffId")
			.Where("DO", "CalendarId").IsEqual(Column.Parameter(_calendarId))
				.And("DO", "Date").IsGreaterOrEqual(Column.Parameter(startDate.Date))
				.And("DO", "Date").IsLessOrEqual(Column.Parameter(endDate.Date)) as Select;

			return selectQuery;
		}

		/// <summary>
		/// Gets the days from the start date to the end date.
		/// </summary>
		/// <param name="startDate"> Start date. </param>
		/// <param name="endDate"> End date. </param>
		private IEnumerable<DateTime> EachDay(DateTime startDate, DateTime endDate)
		{
			for (var day = startDate.Date; day.Date <= endDate.Date; day = day.AddDays(1))
			{
				yield return day;
			}
		}

		/// <summary>
		/// Time interval.
		/// </summary>
		private class TimeInterval
		{
			/// <summary>
			/// Date.
			/// </summary>
			public DateTime? Date { get; set; }

			/// <summary>
			/// Day of the week.
			/// </summary>
			public string DayOfWeek { get; set; }

			/// <summary>
			/// Start time.
			/// </summary>
			public string From { get; set; }

			/// <summary>
			/// End time.
			/// </summary>
			public string To { get; set; }

			/// <summary>
			/// Time difference.
			/// </summary>
			public int DiffTime { get; set; }

			/// <summary>
			/// Day off.
			/// </summary>
			public bool IsWeekend { get; set; }
		}
		
		/// <summary>
		/// Holiday and shortened day.
		/// </summary>
		private class DayOff
		{
			/// <summary>
			/// Date.
			/// </summary>
			public DateTime Date { get; set; }

			/// <summary>
			/// Day off.
			/// </summary>
			public bool IsWeekend { get; set; }
		}
	}
}