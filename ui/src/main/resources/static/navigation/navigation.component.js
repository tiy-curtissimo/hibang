(function () {
	angular
		.module('navigation')
		.component('navigation', {
			templateUrl: 'navigation/navigation.template.html',
			controller: ['$scope', 'Cart', NavigationController],
			controllerAs: 'navigation'
		});
	
	function NavigationController($scope, Cart) {
		var navigation = this;
		
		navigation.cartItemsCount = Cart.cartContents().length;
		Cart.subscribe($scope, function () {
			navigation.cartItemsCount = Cart.cartContents().length;
		});
	}
})();
