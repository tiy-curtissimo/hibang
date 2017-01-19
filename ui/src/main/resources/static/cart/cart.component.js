(function () {
	angular
		.module('cart')
		.component('cart', {
			templateUrl: 'cart/cart.template.html',
			controller: ['$scope', 'Cart', 'Book', CartController],
			controllerAs: 'cart'
		});
	
	function CartController($scope, Cart, Book) {
		var cart = this;

		cart.realizeCart = function realizeCart() {
			var cartContents = Cart.cartContents();
			var books = Book.query(function () {
				var cartBooks = [];
				books.forEach(function (book) {
					if (cartContents.indexOf(book.id) > -1) {
						cartBooks.push(book);
					}
				});
				cart.books = cartBooks;
			});
		};
		
		cart.realizeCart();
		this.removeBook = function (book) {
			Cart.remove(book.id);
			cart.realizeCart();
		};
	}
})();
