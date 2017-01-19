(function () {
	angular
		.module('authors')
		.component('author', {
			templateUrl: 'authors/author.template.html',
			controller: ['Author', AuthorController],
			controllerAs: 'author',
			bindings: { author: '<' }
		});

	function AuthorController(Author) {
		
	}
})();
