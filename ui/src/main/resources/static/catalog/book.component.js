(function () {
	angular
		.module('catalog')
		.component('book', {
			templateUrl: 'catalog/book.template.html',
			controller: ['Book', 'Cart', bookControllerFactory],
			controllerAs: 'catalog',
			bindings: {
				book: '<'
			}
		});
	
	function bookControllerFactory(Book, Cart) {
		return new BookController(Book, Cart);
	}

	function BookController(Book, Cart) {
		this.isInCart = function () {
			return Cart.isInCart(info.id);
		};
	}
})();
