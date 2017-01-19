(function () {
	angular
		.module('dataServices.cart')
		.factory('Cart', ['$resource', '$window', '$exceptionHandler', '$rootScope', cartServiceFactory]);
	
	function cartServiceFactory($resource, $window, $exceptionHandler, $rootScope) {
		return new CartService($resource, $window, $exceptionHandler, $rootScope);
	}
	
	function CartService($resource, $window, $exceptionHandler, $rootScope) {
		this.currentCart = [];
		this.storage = $window.localStorage;
		this.scope = $rootScope;
		try {
			var cart = this.storage.getItem('cart');
			this.currentCart = angular.fromJson(cart) || [];
		} catch (e) {
			$exceptionHandler(e);
		}
	}
	
	CartService.prototype.cartContents = function () {
		return this.currentCart.slice(0);
	};
	
	CartService.prototype.subscribe = function (scope, callback) {
		var handler = this.scope.$on('cart-changed', callback);
		scope.$on('$destroy', handler);
	};
	
	CartService.prototype.add = function (id) {
		this.currentCart.push(id);
		this.storage.setItem('cart', angular.toJson(this.currentCart));
		this.scope.$emit('cart-changed');
	};
	
	CartService.prototype.remove = function (id) {
		var index = this.currentCart.indexOf(id);
		console.log(index, id);
		if (index > -1) {
			this.currentCart.splice(index, 1);
			this.storage.setItem('cart', angular.toJson(this.currentCart));
			this.scope.$emit('cart-changed');
		}
	};
	
	CartService.prototype.isInCart = function (id) {
		return this.currentCart.indexOf(id) > -1;
	}
})();
