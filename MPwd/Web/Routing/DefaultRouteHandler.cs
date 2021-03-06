// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DefaultRouteHandler.cs" company="">
//   Copyright � 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Web.Routing
{
	using System;
	using System.Web;
	using System.Web.Routing;
	using System.Web.WebPages;

	/// <summary>
	/// The default route handler.
	/// </summary>
	public class DefaultRouteHandler : IRouteHandler
	{
		/// <summary>
		/// The get http handler.
		/// </summary>
		/// <param name="requestContext">
		/// The request context.
		/// </param>
		/// <returns>
		/// The <see cref="IHttpHandler"/>.
		/// </returns>
		public IHttpHandler GetHttpHandler(RequestContext requestContext)
		{
			// Use cases:
			//     ~/            -> ~/views/index.cshtml
			//     ~/about       -> ~/views/about.cshtml or ~/views/about/index.cshtml
			//     ~/views/about -> ~/views/about.cshtml
			//     ~/xxx         -> ~/views/404.cshtml
			var filePath = requestContext.HttpContext.Request.AppRelativeCurrentExecutionFilePath;

			if (filePath == "~/")
			{
				filePath = "~/views/index.cshtml";
			}
			else
			{
				if (!filePath.StartsWith("~/views/", StringComparison.OrdinalIgnoreCase))
				{
					filePath = filePath.Insert(2, "views/");
				}

				if (!filePath.EndsWith(".cshtml", StringComparison.OrdinalIgnoreCase))
				{
					filePath = filePath += ".cshtml";
				}
			}

			var handler = WebPageHttpHandler.CreateFromVirtualPath(filePath); // returns NULL if .cshtml file wasn't found

			if (handler == null)
			{
				requestContext.RouteData.DataTokens.Add("templateUrl", "/views/404");
				handler = WebPageHttpHandler.CreateFromVirtualPath("~/views/404.cshtml");
			}
			else
			{
				requestContext.RouteData.DataTokens.Add("templateUrl", filePath.Substring(1, filePath.Length - 8));
			}

			return handler;
		}
	}
}
