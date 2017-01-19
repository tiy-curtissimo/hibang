(function () {
	angular
		.module('hibang')
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			var catalog = {
				name: 'catalog',
				url: '/catalog',
				component: 'catalog'
			};
				
			var staff = {
				name: 'staff',
				url: '/staff',
				component: 'staff'
			};
				
			var cart = {
				name: 'cart',
				url: '/cart',
				component: 'cart'
			};
			
			$stateProvider.state(catalog);
			$stateProvider.state(staff);
			$stateProvider.state(cart);
			$urlRouterProvider.otherwise('/catalog');
		}]);
})();
