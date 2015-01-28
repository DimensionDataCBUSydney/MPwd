'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
	.value('version', '0.1')
	.value('currUser', {
		userName: 'DefaultUserName',
		mpassword: 'DefaultPassword'
		})
	.factory('passwordservice', ['$http', '$rootScope', 'currUser', function($http, $rootScope, currUser)
	{
		var parsePassword = function(currPassword)
		{
			var keysParts = currPassword.split(']');
			var keys = [];
			_.each(keysParts, function(keypart)
			{
				var keyDuration = keypart.replace('[', '').split(':');
				keys.push({ key: keyDuration[0], duration: keyDuration[1] });
			});
			return keys;
		};
		var verifyTiming = function(times, curTimes)
		{
			var tollerate = 0.5;
			for (var index = 0; index < curTimes.length; index++)
			{
				if (Math.abs(curTimes[index] - times[index]) / curTimes[index] > tollerate)
				{
					alert('Not close enough: curTimes:' + curTimes + ' your times:' + times);
					return false;
				}
			}
			alert('GOOD: correct Times:' + curTimes + ' your times:' + times);
			return true;
		};

		return {
			store: function(userName, password)
			{
				currUser.userName = userName;
				currUser.mpassword = password;
			},
			getMPassword: function()
			{
				return currUser.mpassword;
			},
			verify: function(userName, password)
			{
				if (userName.toUpperCase() != currUser.userName.toUpperCase())
				{
					return false;
				}
				var currPasswordParts = parsePassword(currUser.mpassword);
				var passwordParts = parsePassword(password);

				if (currPasswordParts.length != passwordParts.length)
				{
					return false;
				}
				for (var index = 0; index < currPasswordParts.length; index++)
				{
					if (currPasswordParts[index].key != passwordParts[index].key)
					{
						return false;
					}
				}

				var times = _.map(passwordParts, function (part) { return part.duration; });
				var curTimes = _.map(currPasswordParts, function(part) { return part.duration; });

				return verifyTiming(times, curTimes);
			}
		};
		}
	])
	;