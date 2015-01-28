// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="">
//   Copyright © 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Web
{
	using System.Web;
	using System.Web.Optimization;

	/// <summary>
	/// The bundle config.
	/// </summary>
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		/// <summary>
		/// The register bundles.
		/// </summary>
		/// <param name="bundles">
		/// The bundles.
		/// </param>
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new StyleBundle("~/content/css/app").Include("~/content/app.css"));

			bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/vendor/jquery-{version}.js"));

			bundles.Add(new ScriptBundle("~/js/app").Include(
				"~/scripts/vendor/angular-ui-router.js",
				"~/scripts/underscore.min.js",
				"~/scripts/filters.js",
				"~/scripts/services.js",
				"~/scripts/directives.js",
				"~/scripts/controllers.js",
				"~/scripts/app.js"));
		}
	}
}
