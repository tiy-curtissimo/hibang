(function () {
	angular
		.module('dataServices.author')
		.factory('Author', ['$resource', authorService]);
	
	function authorService($resource) {
		return $resource('resources/authors/:authorId', {}, {});
	}
})();
