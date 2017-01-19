(function () {
	angular
		.module('staff')
		.component('staff', {
			templateUrl: 'staff/staff.template.html',
			controller: ['$http', StaffController]
		});
	
	function StaffController($http) {
		
	}
})();