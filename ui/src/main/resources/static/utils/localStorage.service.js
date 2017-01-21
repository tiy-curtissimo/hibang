(function () {
	angular
		.module('utils')
		.factory('localStorage', ['$window', '$exceptionHandler', localStorage]);
	
	function localStorage($window, $exceptionHandler) {
		return {
			getItem: function (name) {
				var value;
				try {
					value = $window.localStorage.getItem(name);
					return angular.fromJson(value);
				} catch (e) {
					$exceptionHandler(e);
				}
			},
			setItem: function (name, value) {
				$window.localStorage.setItem(name, angular.toJson(value));
			}
		};
	}
})();
