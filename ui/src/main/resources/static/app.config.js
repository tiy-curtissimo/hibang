(function () {
	angular
		.module('hibang')
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			var catalog = {
				name: 'catalog',
				url: '/catalog',
				component: 'catalog'
			};
			
			var book = {
				name: 'book',
				url: '/catalog/{catalogId}',
				component: 'book',
				resolve: {
					book: function (Book, $stateParams) {
						return Book.get({bookId: $stateParams.catalogId});
					}
				}
			};
				
			var authors = {
				name: 'authors',
				url: '/authors',
				component: 'authors',
				resolve: {
					authors: function (Author) {
						return Author.query();
					}
				}
			};
			
			var author = {
				name: 'author',
				url: '/authors/{authorId}',
				component: 'author',
				resolve: {
					author: function (Author, $stateParams) {
						return Author.get({authorId: $stateParams.authorId});
					}
				}
			};
				
			var cart = {
				name: 'cart',
				url: '/cart',
				component: 'cart'
			};
				
			var login = {
				name: 'login',
				url: '/login',
				component: 'login'
			};
				
			var signup = {
				name: 'signup',
				url: '/signup',
				component: 'signup'
			};
			
			$stateProvider.state(catalog);
			$stateProvider.state(authors);
			$stateProvider.state(author);
			$stateProvider.state(cart);
			$stateProvider.state(book);
			$stateProvider.state(login);
			$stateProvider.state(signup);
			$urlRouterProvider.otherwise('/catalog');
		}]);
})();
