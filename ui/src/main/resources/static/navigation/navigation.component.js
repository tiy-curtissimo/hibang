(function () {
	angular
		.module('navigation')
		.component('navigation', {
			templateUrl: 'navigation/navigation.template.html',
			controller: ['$scope', 'Cart', 'Borrower', NavigationController],
			controllerAs: 'navigation',
			bindings: {
				borrower: '<'
			}
		});
	
	function NavigationController($scope, Cart, Borrower) {
		var navigation = this;
		
		Borrower.bind(navigation, 'borrower');

		navigation.cartItemsCount = Cart.cartContents().length;
		Cart.subscribe($scope, function () {
			navigation.cartItemsCount = Cart.cartContents().length;
		});
		
		this.logout = function () {
			Cart.clear();
			Borrower.logout();
		};
	}
})();
