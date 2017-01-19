(function () {
	angular
		.module('hibang')
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			var catalog = {
				name: 'catalog',
				url: '/catalog',
				component: 'catalog'
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
			}
				
			var cart = {
				name: 'cart',
				url: '/cart',
				component: 'cart'
			};
			
			$stateProvider.state(catalog);
			$stateProvider.state(authors);
			$stateProvider.state(author);
			$stateProvider.state(cart);
			$urlRouterProvider.otherwise('/catalog');
		}]);
})();
