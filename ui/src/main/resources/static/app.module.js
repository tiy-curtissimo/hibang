(function () {
	angular
		.module('hibang', [
			'ngAnimate',
			'ui.router',
			'account',
			'authors',
			'navigation',
			'cart',
			'catalog'
		])
		.run(['$transitions', '$timeout', function($transitions, $timeout) {
			$timeout(function () {
				$(document).foundation();
			}, 250, false);
			$transitions.onFinish({}, function () {
				$("ui-view").foundation();
			});
		}]);
})();
