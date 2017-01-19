(function () {
	angular
		.module('dataServices.book')
		.factory('Book', ['$resource', BookService]);
	
	function BookService($resource) {
		return $resource('resources/books/:bookId', {}, {});
	}
})();
