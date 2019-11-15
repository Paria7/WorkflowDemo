using System.Collections.Generic;

namespace WorkflowDemo.WebUI.Common
{
    /// <summary>
    /// Paged list interface
    /// </summary>
    public interface IPagedList<T>
    {
        /// <summary>
        /// Page Data
        /// </summary>
        IList<T> Data { get; set; }

        /// <summary>
        /// Page index
        /// </summary>
        int PageIndex { get; }

        /// <summary>
        /// Page size
        /// </summary>
        int PageSize { get; }

        /// <summary>
        /// Total count
        /// </summary>
        int TotalCount { get; }

        /// <summary>
        /// Total pages
        /// </summary>
        int TotalPages { get; }

        /// <summary>
        /// Has previous page
        /// </summary>
        bool HasPreviousPage { get; }

        /// <summary>
        /// Has next age
        /// </summary>
        bool HasNextPage { get; }
    }
}
