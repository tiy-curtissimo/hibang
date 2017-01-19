(function () {
	angular
		.module('dataServices.author')
		.factory('Author', ['$resource', AuthorService]);
	
	function AuthorService($resource) {
		return $resource('resources/authors/:authorId', {}, {});
	}
})();
