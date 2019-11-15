using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class PageResponseEntity
    {
        /// <summary>
        /// 总数量
        /// </summary>
        private int _totalCount;

        /// <summary>
        /// 总数量
        /// </summary>
        public int TotalCount
        {
            get { return _totalCount; }
            set
            {
                if (value <= 0)
                {
                    value = 0;
                }

                _totalCount = value;
            }
        }

        ///// <summary>
        ///// 分页，当前页数
        ///// </summary>
        //private int _pageIndex;

        ///// <summary>
        ///// 分页，当前页数
        ///// </summary>
        //public int PageIndex
        //{
        //    get { return _pageIndex; }
        //    set
        //    {
        //        if (value <= 0)
        //        {
        //            value = 1;
        //        }

        //        _pageIndex = value;
        //    }
        //}


        ///// <summary>
        ///// 分页，当前每页多少条数据
        ///// </summary>
        //private int _pageSize;

        ///// <summary>
        ///// 分页，当前每页多少条数据
        ///// </summary>
        //public int PageSize
        //{
        //    get { return _pageSize; }
        //    set
        //    {
        //        if (value <= 0)
        //        {
        //            value = 10; //默认一页10条数据
        //        }

        //        _pageSize = value;
        //    }
        //}


    }
}