(function () {
	angular
		.module('dataServices.book')
		.factory('Book', ['$resource', bookService]);
	
	function bookService($resource) {
		return $resource('resources/books/:bookId', {}, {});
	}
})();
