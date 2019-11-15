namespace WorkflowDemo.WebUI.DTO
{
    public class PagingEntity
    {
        /// <summary>
        /// 分页，每页记录数 default = 10
        /// </summary>
        public int PageSize { get; set; } = 10;

        /// <summary>
        /// 页码 default = 1
        /// </summary>
        public int PageNo { get; set; } = 1;
    }
}
