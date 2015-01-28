// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Startup.cs" company="">
//   Copyright © 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

[assembly: Microsoft.Owin.OwinStartup(typeof(App.Web.Startup))]

namespace App.Web
{
	using Owin;

	/// <summary>
	/// The startup.
	/// </summary>
	public partial class Startup
	{
		/// <summary>
		/// The configuration.
		/// </summary>
		/// <param name="app">
		/// The app.
		/// </param>
		public void Configuration(IAppBuilder app)
		{
			//// For more information on how to configure your application, visit:
			//// http://go.microsoft.com/fwlink/?LinkID=316888

			this.ConfigureAuth(app);
		}
	}
}
