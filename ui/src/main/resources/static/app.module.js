(function () {
	function foo() {
		console.error.apply(console, arguments);
	}
	$(document).foundation();
	angular
		.module('hibang', [
			'ngAnimate',
			'ui.router',
			'navigation',
			'cart',
			'catalog',
			'staff'
		]);
})();
