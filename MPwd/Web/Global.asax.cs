// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Global.asax.cs" company="">
//   Copyright © 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Web
{
	using System.Web;
	using System.Web.Optimization;
	using System.Web.Routing;

	/// <summary>
	/// The application.
	/// </summary>
	public class Application : HttpApplication
	{
		/// <summary>
		/// The application_ start.
		/// </summary>
		protected void Application_Start()
		{
			RouteConfig.RegisterRoutes(RouteTable.Routes);
			BundleConfig.RegisterBundles(BundleTable.Bundles);
		}
	}
}
