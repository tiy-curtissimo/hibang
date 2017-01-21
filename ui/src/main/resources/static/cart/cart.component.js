(function () {
	angular
		.module('cart')
		.component('cart', {
			templateUrl: 'cart/cart.template.html',
			controller: ['Cart', 'Book', 'Borrower', CartController],
			controllerAs: 'cart',
			bindings: {
				borrower: '<'
			}
		});
	
	function CartController(Cart, Book, Borrower) {
		var cart = this;
		
		Borrower.bind(this, 'borrower');
		
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
