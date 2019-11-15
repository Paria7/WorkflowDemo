using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Xml;
using System.Xml.Serialization;
using RestSharp;
using WorkflowDemo.WebUI.Entities;

namespace WorkflowDemo.WebUI.Common
{
    public class CommonService
    {
        private readonly WorkflowDemoContext _WorkflowDemoContext;

        public CommonService(WorkflowDemoContext WorkflowDemoContext)
        {
            _WorkflowDemoContext = WorkflowDemoContext;
        }

        /// <summary>
        /// 根据卡号调用webservice查询工号，todo
        /// </summary>
        /// <param name="cardNo"></param>
        /// <returns></returns>
        public string GetEmployeeNoByCardNo(string cardNo)
        {

            if (string.IsNullOrWhiteSpace(cardNo))
            {
                return string.Empty;
            }

            return "MM001"; //todo 待调用webservice
        }


        /// <summary>
        /// 调用WebService接口查询天气【demo】
        /// </summary>
        /// <returns></returns>
        public string GetWeather()
        {
            #region 没有参数时，get,post,Soap都可以，有参数就会有问题，推荐改用RestClient

            //带参数的WebRequest怎么调用都报错，应该是这个WebService写的有问题，所以推荐改用RestClient

            ////Get
            //Hashtable ht = new Hashtable();
            //XmlDocument xml = QueryGetWebService("http://www.webxml.com.cn/WebServices/WeatherWebService.asmx",
            //    "getSupportProvince", ht);
            //var x1 = xml.OuterXml;

            ////Post
            //Hashtable ht2 = new Hashtable();
            //XmlDocument xml2 = QueryPostWebService("http://www.webxml.com.cn/WebServices/WeatherWebService.asmx",
            //    "getSupportCity", ht2);
            //var x2 = xml2.OuterXml;

            ////Soap
            //Hashtable ht3 = new Hashtable();
            //XmlDocument xml3 = QuerySoapWebService("http://www.webxml.com.cn/WebServices/WeatherWebService.asmx",
            //    "getSupportProvince", ht3);
            //var x3 = xml3.OuterXml;

            #endregion

            #region 带参数的WebRequest怎么调用都报错，应该是这个WebService写的有问题，

            //// 带参数的WebRequest怎么调用都报错，应该是这个WebService写的有问题，
            //// 因为即使通过restClient能调用成功，参数也很奇怪
            //Hashtable ht4 = new Hashtable();
            //ht4.Add("theCityName", "'苏州'");
            //XmlDocument xml4 = QueryPostWebService("http://www.webxml.com.cn/WebServices/WeatherWebService.asmx",
            //    "getWeatherbyCityName", ht4);
            //var x4 = xml4.OuterXml;

            #endregion

            //推荐使用RestClient
            var headers = new Dictionary<string, string>() {{"UserID", "AndonWS"}, {"PassWord", "AndonWS123"}};
            var s1 = RestfulGetCallWebService(
                "http://www.webxml.com.cn/WebServices/WeatherWebService.asmx/getWeatherbyCityName?theCityName=苏州",
                headers);
            var s2 = RestfulPostCallWebService(
                "http://www.webxml.com.cn/WebServices/WeatherWebService.asmx/getWeatherbyCityName",
                headers, "theCityName=苏州");

            return s2;
        }

        /// <summary>
        /// 【Get】通过RestClient调用webservice
        /// </summary>
        /// <param name="url">url</param>
        /// <param name="headers">请求头</param>
        /// <param name="paramStrs">参数 id=2 这种键值形式的</param>
        /// <returns></returns>
        public string RestfulGetCallWebService(string url, Dictionary<string, string> headers,
            params string[] paramStrs)
        {
            var client = new RestClient(url);
            var request = new RestRequest(Method.GET);
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Connection", "keep-alive");
            request.AddHeader("accept-encoding", "gzip, deflate");
            request.AddHeader("Cache-Control", "no-cache");
            request.AddHeader("Accept", "*/*");
            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            if (headers != null)
            {
                foreach (KeyValuePair<string, string> item in headers)
                {
                    request.AddHeader(item.Key, item.Value);
                }
            }

            foreach (var item in paramStrs)
            {
                request.AddParameter("undefined", item, ParameterType.RequestBody);
            }

            var response = client.Execute(request);

            return response.Content;
        }

        /// <summary>
        /// 【Post】通过RestClient调用webservice
        /// </summary>
        /// <param name="url">url</param>
        /// <param name="headers">请求头</param>
        /// <param name="paramStrs">参数 id=2这种键值形式的</param>
        /// <returns></returns>
        public string RestfulPostCallWebService(string url, Dictionary<string, string> headers,
            params string[] paramStrs)
        {
            var client = new RestClient(url);
            var request = new RestRequest(Method.POST);
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Connection", "keep-alive");
            request.AddHeader("accept-encoding", "gzip, deflate");
            request.AddHeader("Cache-Control", "no-cache");
            request.AddHeader("Accept", "*/*");
            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            if (headers != null)
            {
                foreach (KeyValuePair<string, string> item in headers)
                {
                    request.AddHeader(item.Key, item.Value);
                }
            }

            foreach (var item in paramStrs)
            {
                request.AddParameter("undefined", item, ParameterType.RequestBody);
            }

            var response = client.Execute(request);

            return response.Content;
        }

        #region HttpWebRequest 方式，带参数会报错(不确定是否是WebService的接口问题)，不推荐使用

        private static readonly Hashtable XmlNamespaces = new Hashtable(); //缓存xmlNamespace，避免重复调用GetNamespace    

        /// <summary>
        /// Soap 调用 WebService
        /// </summary>
        /// <param name="url">webService地址</param>
        /// <param name="methodName">方法名称</param>
        /// <param name="pars">string类型的参数名、参数值  </param>
        /// <returns></returns> 
        public static XmlDocument QuerySoapWebService(string url, string methodName, Hashtable pars)
        {
            if (XmlNamespaces.ContainsKey(url))
            {
                return QuerySoapWebService(url, methodName, pars, XmlNamespaces[url].ToString());
            }

            return QuerySoapWebService(url, methodName, pars, GetNamespace(url));
        }


        /// <summary>
        /// Get 调用 WebService
        /// </summary>
        /// <param name="url">webService地址</param>
        /// <param name="methodName">方法名称</param>
        /// <param name="pars">参数</param>
        /// <returns></returns>
        public static XmlDocument QueryGetWebService(string url, string methodName, Hashtable pars)
        {

            HttpWebRequest request =
                (HttpWebRequest) WebRequest.Create(url + "/" + methodName + "?" + ParsToString(pars));
            request.Method = "GET";
            request.ContentType = "application/x-www-form-urlencoded";
            request.Credentials = CredentialCache.DefaultCredentials;
            request.Timeout = 10000;
            return ReadXmlResponse(request.GetResponse());
        }

        /// <summary>
        /// 读取XML响应流
        /// </summary>
        /// <param name="response">响应</param>
        /// <returns></returns>
        private static XmlDocument ReadXmlResponse(WebResponse response)
        {
            StreamReader sr = new StreamReader(response.GetResponseStream(), Encoding.UTF8);
            string retXml = sr.ReadToEnd();
            sr.Close();
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(retXml);
            return doc;
        }

        /// <summary>
        /// Post调用 WebService
        /// </summary>
        /// <param name="url">webService地址</param>
        /// <param name="methodName">方法名称</param>
        /// <param name="pars">参数</param>
        /// <returns></returns>
        public static XmlDocument QueryPostWebService(string url, string methodName, Hashtable pars)
        {
            HttpWebRequest request = (HttpWebRequest) WebRequest.Create(url + "/" + methodName);
            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            request.Credentials = CredentialCache.DefaultCredentials;
            request.Timeout = 10000;
            byte[] data = EncodePars(pars);
            WriteRequestData(request, data);
            return ReadXmlResponse(request.GetResponse());
        }

        /// <summary>
        /// 参数编码
        /// </summary>
        /// <param name="pars"></param>
        /// <returns></returns>
        private static byte[] EncodePars(Hashtable pars)
        {
            return Encoding.UTF8.GetBytes(ParsToString(pars));
        }

        /// <summary>
        /// 拼接参数
        /// </summary>
        /// <param name="pars"></param>
        /// <returns></returns>
        private static string ParsToString(Hashtable pars)
        {
            StringBuilder sb = new StringBuilder();
            foreach (string k in pars.Keys)
            {
                if (sb.Length > 0)
                {
                    sb.Append("&");
                }

                //sb.Append(HttpUtility.UrlEncode(k) + "=" + HttpUtility.UrlEncode(pars[k].ToString()));
                sb.Append(k + "=" + pars[k]);
            }

            return sb.ToString();
        }

        /// <summary>
        /// post，写入post提交的参数
        /// </summary>
        /// <param name="request"></param>
        /// <param name="data"></param>
        private static void WriteRequestData(HttpWebRequest request, byte[] data)
        {
            request.ContentLength = data.Length;
            Stream writer = request.GetRequestStream();
            writer.Write(data, 0, data.Length);
            writer.Close();
        }

        /// <summary>
        /// 构建SOAP方法
        /// </summary>
        /// <param name="url"></param>
        /// <param name="methodName"></param>
        /// <param name="pars"></param>
        /// <param name="xmlNs"></param>
        /// <returns></returns>
        private static XmlDocument QuerySoapWebService(string url, string methodName, Hashtable pars, string xmlNs)
        {
            XmlNamespaces[url] = xmlNs; //加入缓存，提高效率    
            HttpWebRequest request = (HttpWebRequest) WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "text/xml; charset=utf-8";
            request.Headers.Add("SOAPAction", xmlNs + (xmlNs.EndsWith("/") ? "" : "/") + methodName);
            request.Credentials = CredentialCache.DefaultCredentials;
            request.Timeout = 10000;

            byte[] data = EncodeParsToSoap(pars, xmlNs, methodName);
            WriteRequestData(request, data);
            XmlDocument doc = new XmlDocument(), doc2 = new XmlDocument();
            doc = ReadXmlResponse(request.GetResponse());
            XmlNamespaceManager mgr = new XmlNamespaceManager(doc.NameTable);
            mgr.AddNamespace("soap", "http://schemas.xmlsoap.org/soap/envelope/");
            string retXml = doc.SelectSingleNode("//soap:Body/*/*", mgr).InnerXml;
            doc2.LoadXml("<root>" + retXml + "</root>");
            AddDelaration(doc2);
            return doc2;
        }

        /// <summary>
        /// 创建命名空间
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        private static string GetNamespace(string url)
        {
            HttpWebRequest request = (HttpWebRequest) WebRequest.Create(url + "?WSDL");
            request.Credentials = CredentialCache.DefaultCredentials;
            request.Timeout = 10000;
            WebResponse response = request.GetResponse();
            StreamReader sr = new StreamReader(response.GetResponseStream(), Encoding.UTF8);
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(sr.ReadToEnd());
            sr.Close();
            return doc.SelectSingleNode("//@targetNamespace").Value;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="pars"></param>
        /// <param name="xmlNs"></param>
        /// <param name="methodName"></param>
        /// <returns></returns>
        private static byte[] EncodeParsToSoap(Hashtable pars, string xmlNs, string methodName)
        {
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(
                "<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'></soap:Envelope>");
            AddDelaration(doc);
            XmlElement soapBody = doc.CreateElement("soap", "Body", "http://schemas.xmlsoap.org/soap/envelope/");
            XmlElement soapMethod = doc.CreateElement(methodName);
            soapMethod.SetAttribute("xmlns", xmlNs);
            foreach (string k in pars.Keys)
            {
                XmlElement soapPar = doc.CreateElement(k);
                soapPar.InnerXml = ObjectToSoapXml(pars[k]);
                soapMethod.AppendChild(soapPar);
            }

            soapBody.AppendChild(soapMethod);
            doc.DocumentElement.AppendChild(soapBody);
            return Encoding.UTF8.GetBytes(doc.OuterXml);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="o"></param>
        /// <returns></returns>
        private static string ObjectToSoapXml(object o)
        {
            XmlSerializer mySerializer = new XmlSerializer(o.GetType());
            MemoryStream ms = new MemoryStream();
            mySerializer.Serialize(ms, o);
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(Encoding.UTF8.GetString(ms.ToArray()));
            if (doc.DocumentElement != null)
            {
                return doc.DocumentElement.InnerXml;
            }
            else
            {
                return o.ToString();
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="doc"></param>
        private static void AddDelaration(XmlDocument doc)
        {
            XmlDeclaration decl = doc.CreateXmlDeclaration("1.0", "utf-8", null);
            doc.InsertBefore(decl, doc.DocumentElement);
        }

        #endregion

        /// <summary>
        /// 根据用户工号查询用户的权限
        /// </summary>
        /// <param name="employeeNo"></param>
        /// <returns></returns>
        private IQueryable<Role> GetUserRolesByNo(string employeeNo)
        {
            return from u in _WorkflowDemoContext.User
                join ru in _WorkflowDemoContext.RoleUser
                    on u.Id equals ru.UserId
                join r in _WorkflowDemoContext.Role
                    on ru.RoleId equals r.Id
                where !u.IsDeleted && !ru.IsDeleted && !r.IsDeleted
                      && u.EmployeeNo == employeeNo
                select r;
        }
    }
}
