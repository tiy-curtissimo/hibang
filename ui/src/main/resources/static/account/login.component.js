(function () {
	angular
		.module('account')
		.component('login', {
			templateUrl: 'account/login.template.html',
			controller: ['$state', 'Borrower', LoginController],
			controllerAs: 'login'
		});
	
	function LoginController($state, Borrower) {
		let login = this;
		
		login.authenticateBorrower = function () {
			login.error = false;
			Borrower
				.authenticate(login.borrower.email, login.borrower.password)
				.then(function () {
					$state.go('catalog');
				})
				.catch(function () {
					login.error = true;
				});
		}
	}
})();
