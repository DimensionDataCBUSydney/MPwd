// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DefaultRoute.cs" company="">
//   Copyright © 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Web.Routing
{
	using System.Web.Routing;

	/// <summary>
	/// The default route.
	/// </summary>
	public class DefaultRoute : Route
	{
		/// <summary>
		/// Initialises a new instance of the <see cref="DefaultRoute"/> class.
		/// </summary>
		public DefaultRoute()
			: base("{*path}", new DefaultRouteHandler())
		{
			this.RouteExistingFiles = false;
		}
	}
}
