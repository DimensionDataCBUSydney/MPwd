'use strict';

//angular.module('app.directives', [])

//    .directive('appVersion', ['version', function (version) {
//        return function (scope, elm, attrs) {
//            elm.text(version);
//        };
//    }]);

var app = angular.module('app.directives', []);

app.directive('keyLogger', function()
{
	var modes = ['numpad', 'keyboard'];

	var pressedKeys = [];

	return function(scope, elm, attrs)
	{
		elm.bind('blur', function()
		{
			var mPassword = '';
			_.last(pressedKeys).duration = 0;
			_.each(pressedKeys, function(key) { mPassword += '[' + key.key + ':' + key.duration + ']'; });
			pressedKeys = [];
			scope.MPassword = mPassword;
		});
		elm.bind('keyup', function(evt)
			{
				var matchedKey = _.find(pressedKeys, function(key, index) { return key.key == evt.which && key.up == null; });
				if (matchedKey == null)
				{
					return;
				}
				matchedKey.up = new Date();
				matchedKey.duration = matchedKey.up.getTime() - matchedKey.down.getTime();
				elm[0].style.backgroundColor = "white";
				_.each(pressedKeys, function(key) { console.log(key.key + " " + key.duration); });
			}
		);
		elm.bind('keydown', function(evt)
			{
				if (modes.indexOf(attrs.mode) == -1)
				{
					return;
				}
				var allowedKeys = attrs.mode == 'numpad' ? function(code) { return code >= 96 && code <= 105; } : function() { return false; };
				if (!allowedKeys(evt.which))
				{
					return;
				}
				var pressedKey = {
					key: evt.which,
					down: new Date(),
					up: null,
					duration: null
				};
				pressedKeys.push(pressedKey);
				elm[0].style.backgroundColor = "pink";
			}
		);
	}
});
