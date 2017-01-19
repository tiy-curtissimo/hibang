(function () {
	angular
		.module('catalog')
		.component('catalog', {
			templateUrl: 'catalog/catalog.template.html',
			controller: ['Book', 'Cart', CatalogController],
			controllerAs: 'catalog'
		});
	
	function CatalogController(Book, Cart) {
		var catalog = this;
		var books = Book.query(function () {
			catalog.books = books;
		});
		catalog.isBookInCart = function (book) {
			return Cart.isInCart(book.id);
		};
	}
})();
