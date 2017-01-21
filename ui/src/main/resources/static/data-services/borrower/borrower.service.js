(function () {
	angular
		.module('dataServices.book')
		.factory('Borrower', ['$resource', 'localStorage', borrowerServiceFactory]);
	
	function borrowerServiceFactory($resource, localStorage) {
		return new BorrowerService($resource, localStorage);
	}
	
	function BorrowerService($resource, localStorage) {
		this.foolishness = true;
		this.api = $resource('resources/borrowers/:borrowerId', {}, {
			authenticate: {
				method: 'PUT',
				params: { borrowerId: 'me' },
				isArray: false,
				withCredentials: true,
				transformResponse: function (data, headers, status) {
					if (data.length === 0) {
						throw "not a valid login.";
					}
					return angular.fromJson(data);
				}
			}
		}, {});
		this.subscribers = [];
		this.storage = localStorage;
		this.current = this.storage.getItem('borrower');
	}
	
	BorrowerService.prototype.create = function (spec) {
		var service = this;
		
		var borrowerResource = new service.api(spec);
		borrowerResource.save = service.save.bind(service, borrowerResource);
		return borrowerResource;
	};
	
	BorrowerService.prototype.bind = function (controller, propertyName) {
		var subscriber = {
			controller: controller,
			propertyName: propertyName,
			call: function (change) {
				this.controller[this.propertyName] = change;
			}
		};
		this.subscribers.push(subscriber);
		subscriber.call(this.current);
	};
	
	BorrowerService.prototype.save = function (borrowerResource) {
		var service = this;
		
		return borrowerResource
			.$save()
			.then(() => service.setCurrent(borrowerResource));
	};
	
	BorrowerService.prototype.authenticate = function (email, password) {
		var service = this;

		return service.api
			.authenticate({email: email, password: password})
			.$promise
			.then(function (borrower) {
				service.setCurrent(borrower);
				return borrower;
			});
	};
	
	BorrowerService.prototype.setCurrent = function (borrower) {
		this.current = borrower;
		this.storage.setItem('borrower', borrower);
		for (var i = 0; i < this.subscribers.length; i += 1) {
			this.subscribers[i].call(borrower);
		}
	};
	
	BorrowerService.prototype.logout = function () {
		this.current = null;
		this.setCurrent(null);
	};
})();
