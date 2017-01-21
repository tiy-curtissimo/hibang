(function () {
	angular
		.module('catalog')
		.component('catalog', {
			templateUrl: 'catalog/catalog.template.html',
			controller: ['Book', 'Cart', 'Borrower', CatalogController],
			controllerAs: 'catalog',
			bindings: {
				borrower: '<'
			}
		});
	
	function CatalogController(Book, Cart, Borrower) {
		var catalog = this;
		
		Borrower.bind(catalog, 'borrower');
		var books = Book.query(function () {
			catalog.books = books;
		});
		catalog.isBookInCart = function (book) {
			return book && Cart.isInCart(book.id);
		};
	}
})();
