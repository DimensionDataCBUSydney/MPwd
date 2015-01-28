/// <reference path="_references.js" />
/// <reference path="services.js" />
/// <reference path="controllers.js" />

'use strict';

describe('Controllers: HomeCtrl', function () {
    var $scope, ctrl;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('HomeCtrl', { $scope: $scope });
    }));

    it('should set a page title', function () {
        expect($scope.$root.title).toBe('AngularJS SPA Template for Visual Studio');
    });
});

describe('Controllers: SignupCtrl', function () {
    var $scope, ctrl;

    beforeEach(module('app.controllers'));

    beforeEach(module('app.services'));

    beforeEach(inject(function($rootScope, $controller)
    {
        $scope = $rootScope.$new();
        ctrl = $controller('SignupCtrl', { $scope: $scope });
    }));

    it('should set a page title', function () {
    	expect($scope.$root.title).toBe('AngularJS SPA | Sign up');
    });
});

describe('Controllers: LoginCtrl', function () {
    var $scope, ctrl;

    beforeEach(module('app.controllers'));

    beforeEach(module('app.services'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('LoginCtrl', { $scope: $scope });
    }));

    it('should set a page title', function () {
        expect($scope.$root.title).toBe('AngularJS SPA | Sign In');
    });
});

describe('Controllers: Error404Ctrl', function () {
    var $scope, ctrl;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('Error404Ctrl', { $scope: $scope });
    }));

    it('should set a page title', function () {
        expect($scope.$root.title).toBe('Error 404: Page Not Found');
    });
});