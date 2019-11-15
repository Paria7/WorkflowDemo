using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class SwingCardDto
    {
        /// <summary>
        /// 是否需要刷卡，如果需要的话，那CardNo必须有值
        /// </summary>
        public bool NeedSwingCard { get; set; }

        /// <summary>
        /// portal刷卡的卡号
        /// </summary>
        public string CardNo { get; set; }
    }
}
