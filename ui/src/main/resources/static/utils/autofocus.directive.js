(function () {
	angular
		.module('utils', [])
		.directive('autofocus', ['$timeout', autofocus]);
	
	function autofocus ($timeout) {
		return {
			restrict: 'A',
			link: function ($scope, $element) {
				$timeout(function () {
					$element[0].focus();
				});
			}
		};
	}
})();
