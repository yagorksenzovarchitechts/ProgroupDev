using System;
using System.Collections.Generic;
using System.Linq;
using Terrasoft.Core;
using Terrasoft.Core.DB;

namespace Pgr.Core
{
	#region Class: PgrContactDuplicatesMergeHelper

	public class PgrContactDuplicatesMergeHelper
	{

		#region Fields

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructor

		public PgrContactDuplicatesMergeHelper(UserConnection userConnection)
		{
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Public

		public void MergeContactDuplicates(Guid primaryContactId, IEnumerable<Guid> duplicateContactIds)
		{
			string entitiesToMerge = string.Join(",",
				duplicateContactIds.Select(id => id.ToString("D").ToUpperInvariant()));
			if (string.IsNullOrEmpty(entitiesToMerge)) {
				return;
			}
			StoredProcedure storedProcedure = new StoredProcedure(_userConnection, "PgrMergeContactDuplicates")
				.WithParameter("PrimaryEntityId", primaryContactId)
				.WithParameter("EntitiesToMerge", entitiesToMerge)
				.WithParameter("CurrentUserId", _userConnection.CurrentUser.ContactId) as StoredProcedure;
			storedProcedure.Execute();
		}

		#endregion

	}

	#endregion
}
