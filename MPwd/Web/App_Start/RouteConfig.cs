// --------------------------------------------------------------------------------------------------------------------
// <copyright file="RouteConfig.cs" company="">
//   Copyright © 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Web
{
	using System.Web.Routing;

	using App.Web.Routing;

	/// <summary>
	/// The route config.
	/// </summary>
	public class RouteConfig
	{
		/// <summary>
		/// The register routes.
		/// </summary>
		/// <param name="routes">
		/// The routes.
		/// </param>
		public static void RegisterRoutes(RouteCollection routes)
		{
			routes.Add("Default", new DefaultRoute());
		}
	}
}
