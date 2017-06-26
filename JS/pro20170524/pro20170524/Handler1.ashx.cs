using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace pro20170524
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string  username =context.Request["username"];
            string pwd = context.Request["pwd"];
            string sSql = string.Format("select UserId from UserInfo where UserName='{0}' and pwd='{1}'", username, pwd);
            if (SqlHelper.Exists(sSql))
            {
                context.Response.Write("ok");
            }
            else
            {
                context.Response.Write("no");
            }
        
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}