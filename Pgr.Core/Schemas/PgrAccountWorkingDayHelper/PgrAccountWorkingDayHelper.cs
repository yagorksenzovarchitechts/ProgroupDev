using System;
using Terrasoft.Core;
using Terrasoft.Core.Configuration;
using Terrasoft.Core.Entities;

namespace Pgr.Core
{
    #region Class: PgrAccountWorkingDayHelper

    /// <summary>
    ///     Determines whether a given day is a working day for a specific customer (Account),
    ///     using the working calendar bound to the customer's Country (field CgrCalendar).
    ///     Falls back to the base calendar (SysSettings "BaseCalendar", then
    ///     <see cref="PgrConstants.Calendar.StandardCalendar" />) when the customer has no
    ///     country-specific calendar. The actual day-off logic is delegated to
    ///     <see cref="PgrCalendarServiceUtils" />.
    /// </summary>
    public class PgrAccountWorkingDayHelper
    {
        #region Fields

        private readonly UserConnection _userConnection;

        #endregion

        #region Constructor

        public PgrAccountWorkingDayHelper(UserConnection userConnection)
        {
            _userConnection = userConnection;
        }

        #endregion

        #region Methods: Public

        /// <summary>
        ///     Whether today is a working day for the given customer.
        /// </summary>
        /// <param name="accountId"> Customer (Account) Id. </param>
        /// <returns> <c>true</c> if today is a working day. </returns>
        public bool IsCurrentDayWorkingDay(Guid accountId)
        {
            return IsWorkingDay(DateTime.Today, accountId);
        }

        /// <summary>
        ///     Whether the given date is a working day for the given customer.
        /// </summary>
        /// <param name="date"> Date to check. </param>
        /// <param name="accountId"> Customer (Account) Id. </param>
        /// <returns> <c>true</c> if the date is a working day. </returns>
        public bool IsWorkingDay(DateTime date, Guid accountId)
        {
            var calendarId = ResolveCalendarId(accountId);
            var calendarUtils = new PgrCalendarServiceUtils(_userConnection);
            return calendarUtils.IsWorkingDay(date, calendarId);
        }

        /// <summary>
        ///     Adds the given number of working days to the start date using the customer's calendar.
        /// </summary>
        /// <param name="startDate"> Start date. </param>
        /// <param name="numberOfDays"> Number of working days to add. </param>
        /// <param name="accountId"> Customer (Account) Id. </param>
        /// <returns> End date. </returns>
        public DateTime AddWorkingDays(DateTime startDate, int numberOfDays, Guid accountId)
        {
            var calendarId = ResolveCalendarId(accountId);
            var calendarUtils = new PgrCalendarServiceUtils(_userConnection);
            return calendarUtils.AddWorkingDays(startDate, numberOfDays, calendarId);
        }

        /// <summary>
        ///     DayType Id of the given date for the customer's calendar. Used to tell a full
        ///     working day from a half ("Reduced working") one — see <see cref="PgrConstants.DayType" />.
        /// </summary>
        /// <param name="date"> Date to classify. </param>
        /// <param name="accountId"> Customer (Account) Id. </param>
        /// <returns> DayType Id, or <see cref="Guid.Empty" /> when the calendar has no entry. </returns>
        public Guid GetDayTypeId(DateTime date, Guid accountId)
        {
            var calendarId = ResolveCalendarId(accountId);
            var calendarUtils = new PgrCalendarServiceUtils(_userConnection);
            return calendarUtils.GetDayTypeId(date, calendarId);
        }

        /// <summary>
        ///     The calendar Id resolved for the customer (Account.Country.CgrCalendar, or the base
        ///     calendar fallback). Exposed so callers can record which calendar a calculation used.
        /// </summary>
        /// <param name="accountId"> Customer (Account) Id. </param>
        /// <returns> Calendar Id. </returns>
        public Guid GetCalendarId(Guid accountId)
        {
            return ResolveCalendarId(accountId);
        }

        #endregion

        #region Methods: Private

        /// <summary>
        ///     Resolves the calendar for the customer: Account.Country.CgrCalendar,
        ///     falling back to the base calendar when it is not set.
        /// </summary>
        private Guid ResolveCalendarId(Guid accountId)
        {
            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Account")
            {
                UseAdminRights = false,
                PrimaryQueryColumn =
                {
                    IsAlwaysSelect = true
                }
            };
            var calendarColumn = esq.AddColumn("Country.PgrCalendar").Name;
            var account = esq.GetEntity(_userConnection, accountId);
            if (account != null)
            {
                var calendarId = account.GetTypedColumnValue<Guid>(calendarColumn);
                if (calendarId != Guid.Empty)
                {
                    return calendarId;
                }
            }

            return GetBaseCalendarId();
        }

        /// <summary>
        ///     Base calendar from SysSettings "BaseCalendar", or the standard calendar constant.
        /// </summary>
        private Guid GetBaseCalendarId()
        {
            var baseCalendarId = (Guid)SysSettings.GetValue(_userConnection, "BaseCalendar");
            return baseCalendarId == Guid.Empty
                ? PgrConstants.Calendar.StandardCalendar
                : baseCalendarId;
        }

        #endregion
    }

    #endregion
}
