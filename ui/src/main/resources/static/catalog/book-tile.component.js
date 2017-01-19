(function () {
	angular
		.module('catalog')
		.component('bookTile', {
			templateUrl: 'catalog/book-tile.template.html',
			controller: ['Cart', BookTileController],
			controllerAs: 'bookTile',
			bindings: {
				book: '<'
			}
		});
	
	function BookTileController(Cart) {
		var tile = this;
		
		tile.isInCart = Cart.isInCart(this.book.id);
		
		tile.addToCart = function (id) {
			Cart.add(id);
			tile.isInCart = true;
		};
	}
})();
