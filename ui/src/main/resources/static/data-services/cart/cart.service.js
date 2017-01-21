(function () {
	angular
		.module('dataServices.cart')
		.factory('Cart', ['$resource', 'localStorage', '$rootScope', cartServiceFactory]);
	
	function cartServiceFactory($resource, localStorage, $rootScope) {
		return new CartService($resource, localStorage, $rootScope);
	}
	
	function CartService($resource, localStorage, $rootScope) {
		this.currentCart = [];
		this.storage = localStorage;
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
	
	CartService.prototype.clear = function () {
		this.currentCart = [];
		this.serializeCart();
	};
	
	CartService.prototype.subscribe = function (scope, callback) {
		var handler = this.scope.$on('cart-changed', callback);
		scope.$on('$destroy', handler);
	};
	
	CartService.prototype.add = function (id) {
		this.currentCart.push(id);
		this.serializeCart();
	};
	
	CartService.prototype.remove = function (id) {
		var index = this.currentCart.indexOf(id);
		console.log(index, id);
		if (index > -1) {
			this.currentCart.splice(index, 1);
			this.serializeCart();
		}
	};
	
	CartService.prototype.serializeCart = function (id) {
		this.storage.setItem('cart', angular.toJson(this.currentCart));
		this.scope.$emit('cart-changed');
	};
	
	CartService.prototype.isInCart = function (id) {
		return this.currentCart.indexOf(id) > -1;
	}
})();
