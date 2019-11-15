using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;

namespace WorkflowDemo.WebUI.Common
{
    public class EnvironmentHelper
    {
        private readonly IHttpContextAccessor _accessor;

        public EnvironmentHelper(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }

        /// <summary>
        /// 根据文件的物理路径获取虚拟路径
        /// </summary>
        /// <returns></returns>
        public string GetFileVirtualPathFromPhysicalPath(string filePhysicalPah)
        {
            return (GetApiFullUrl() + "/" + GetFileRelationPath(filePhysicalPah)).Replace("\\", "/");
        }

        /// <summary>
        /// 获取当前访问的api url+port
        /// </summary>
        /// <returns></returns>
        public string GetApiFullUrl()
        {
            var url = _accessor.HttpContext.Request.GetDisplayUrl();
            if (string.IsNullOrWhiteSpace(url))
            {
                var ipAddr = _accessor.HttpContext.Connection.LocalIpAddress.MapToIPv4().ToString();
                var port = _accessor.HttpContext.Connection.LocalPort; //部署iis 之后端口号会变，不准确
                return $"http://{ipAddr}:{port}";
            }

            var ipAndPort = url.Substring(0, url.IndexOf("/api/", StringComparison.OrdinalIgnoreCase));
            return ipAndPort;

        }

        /// <summary>
        /// 根据文件的物理路径，获取相对路径
        /// </summary>
        /// <param name="filePhysicalPath">文件物理路径 D://....</param>
        /// <returns>相对路径，uploads//20190425//...</returns>
        public string GetFileRelationPath(string filePhysicalPath)
        {
            if (string.IsNullOrWhiteSpace(filePhysicalPath))
            {
                return string.Empty;
            }

            var relationPathStartIndex = filePhysicalPath.IndexOf("\\uploads\\", StringComparison.OrdinalIgnoreCase);
            return relationPathStartIndex > 0
                ? filePhysicalPath.Substring(relationPathStartIndex)
                : filePhysicalPath;
        }
    }
}
