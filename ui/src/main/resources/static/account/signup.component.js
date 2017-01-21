(function () {
	angular
		.module('account')
		.component('signup', {
			templateUrl: 'account/signup.template.html',
			controller: ['$state', 'Borrower', signUpControllerFactory],
			controllerAs: 'signup'
		});
	
	function signUpControllerFactory($state, Borrower) {
		return new SignUpController($state, Borrower)
	}
	
	function SignUpController($state, Borrower) {
		this.Borrower = Borrower;
		this.state = $state;
	}
	
	SignUpController.prototype.createBorrower = function (Borrower) {
		var signup = this;

		var borrower = signup.Borrower.create(this.borrower);
		borrower
			.save()
			.then(function () {
				signup.error = false;
				signup.state.go('catalog');
			})
			.catch(function (e) {
				signup.error = true;
			});
	};
})();
