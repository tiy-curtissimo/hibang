(function () {
	angular
		.module('catalog')
		.component('bookTile', {
			templateUrl: 'catalog/book-tile.template.html',
			controller: ['Cart', 'Borrower', BookTileController],
			controllerAs: 'bookTile',
			bindings: {
				book: '<',
				borrower: '<'
			}
		});
	
	function BookTileController(Cart, Borrower) {
		var tile = this;
		Borrower.bind(this, 'borrower');
		
		tile.isInCart = Cart.isInCart(this.book.id);
		
		tile.addToCart = function (id) {
			Cart.add(id);
			tile.isInCart = true;
		};
	}
})();
