(function () {
	angular
		.module('authors')
		.component('authors', {
			templateUrl: 'authors/authors.template.html',
			controller: ['Author', AuthorsController],
			controllerAs: 'list',
			bindings: { authors: '<' }
		});
	
	function AuthorsController(Author) {
	}
})();