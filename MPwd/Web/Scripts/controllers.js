'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

	// Path: /
	.controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
		$scope.$root.title = 'AngularJS SPA Template for Visual Studio';
		$scope.$on('$viewContentLoaded', function () {
			$window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
		});
	}])

	// Path: /signup
	.controller('SignupCtrl', ['$scope', '$location', '$window', 'passwordservice',
		function($scope, $location, $window, passwordservice)
		{
			$scope.$root.title = 'AngularJS SPA | Sign up';
			$scope.signup = function()
			{
				passwordservice.store($scope.userName, $scope.MPassword);
				alert('The password is:' + passwordservice.getMPassword());
				$location.path('/');
				return false;
			}
			$scope.$on('$viewContentLoaded', function () {
				$window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
			});
		}]
	)

	// Path: /login
	.controller('LoginCtrl', ['$scope', '$location', '$window', 'passwordservice', function($scope, $location, $window, passwordservice)
	{
		$scope.$root.title = 'AngularJS SPA | Sign In';
		// TODO: Authorize a user
		$scope.login = function()
		{
			if (!passwordservice.verify($scope.userName, $scope.MPassword))
			{
				alert('Invalid username or password.');
				return false;
			}
			//alert($scope.MPassword);
			$location.path('/');
			return false;
		};
		$scope.keyPress = function($event)
		{
			alert($event.keyCode);
		}
		$scope.$on('$viewContentLoaded', function () {
			$window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
		});
	}])

	// Path: /error/404
	.controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
		$scope.$root.title = 'Error 404: Page Not Found';
		$scope.$on('$viewContentLoaded', function () {
			$window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
		});
	}]);