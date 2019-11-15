using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class PageRequestEntity
    {
        /// <summary>
        /// 分页，当前页数
        /// </summary>
        private int _pageIndex;

        /// <summary>
        /// 分页，当前每页多少条数据
        /// </summary>
        private int _pageSize;

        /// <summary>
        /// 分页，当前页数
        /// </summary>
        public int PageIndex
        {
            get
            {
                if (_pageIndex <= 0)
                {
                    _pageIndex = 1;
                }

                return _pageIndex;
            }
            set { _pageIndex = value; }
        }

        /// <summary>
        /// 分页，当前每页多少条数据
        /// </summary>
        public int PageSize
        {
            get
            {
                if (_pageSize <= 0)
                {
                    _pageSize = 15;
                }

                return _pageSize;
            }
            set { _pageSize = value; }
        }
    }
}