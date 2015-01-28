/// <reference path="_references.js" />
/// <reference path="services.js" />

'use strict';

describe('services', function () {
	beforeEach(module('app.services'));

	describe('version', function () {
		it('should return current version', inject(function (version) {
			expect(version).toEqual('0.1');
		}));
	});

	var $scope, services;

	beforeEach(inject(function($rootScope, passwordservice)
	{
		$scope = $rootScope.$new();
		services = passwordservice;
	}));

	describe('password', function()
	{
		it('store method should set password in scope.', inject(function(currUser)
		{
			services.store('x', 'y');
			expect(currUser.userName).toEqual('x');
			expect(currUser.mpassword).toEqual('y');
		}));

		it('verify method should return false if the user name is not correct', inject(function()
		{
			services.store('userName', 'y');
			expect(services.verify('userName1', '')).toBeFalsy();
		}));

		it('verify method should return false if the password characters are incorrect', inject(function()
		{
			services.store('userName', '[100:100][101:45][102:55]');
			expect(services.verify('userName', '[101:100][101:45][102:55]')).toBeFalsy();
		}));

		it('verify method should return false if the timings are very different', inject(function()
		{
			services.store('userName', '[100:100][101:55][102:0]');
			expect(services.verify('userName', '[100:100][101:387][102:0]')).toBeFalsy();
		}));
	});
});