describe("Application myApp >>", function () {

	beforeEach(module('myApp'));

	describe("service >>", function () {
		it("should do the sum", inject(function (Calc) {
			expect(Calc.sum(3, 4)).toBe(7);
		}));
	});

	describe("controller >> ", function () {
		let controller, Calc = {
			sum: angular.noop
		};

		beforeEach(inject(($controller) => {
			spyOn(Calc, 'sum').and.returnValue(7);
			controller = $controller('MainController', {
				Calc: Calc
			})
		}));

		it("should call Calc.sum", () => {
			controller.doCalculation();
			expect(Calc.sum).toHaveBeenCalled();
		});

		it("should set result", () => {
			controller.doCalculation();
			expect(controller.result).toBe(7);
		});
	});

	describe("service with $http (async operations)", function () {

		let UserService, httpBackend,
			mockUsers = [{
				name: 'Alice'
			}];

		beforeEach(inject((_UserService_, _$httpBackend_) => {
			UserService = _UserService_;
			$httpBackend = _$httpBackend_;
			$httpBackend.whenGET('/users/1').respond(mockUsers[0]);
			//UserService
		}));

		it("should get one user", function (done) {
			UserService.getOne(1).then((user) => {
				expect(user).toEqual(mockUsers[0]);
				done();
			});
			$httpBackend.flush();
		});
	});

	describe("directive >>", function () {
		let UserService, isolatedScope,
			mockUser = {
				name: 'Alice'
			};

		beforeEach(inject((_UserService_, $q, $compile, $rootScope) => {
			UserService = _UserService_;
			spyOn(UserService, 'getOne').and.returnValue($q.resolve(mockUser));
			element = angular.element('<user-card user="user"></user-card>');
			$scope = $rootScope.$new();
			$scope.user = mockUser;
			$compile(element)($scope);
			isolatedScope = element.isolateScope();
		}));


		it("should call UserService", inject(function (UserService) {
			isolatedScope.someMethod();
			expect(UserService.getOne).toHaveBeenCalled();
		}));

		it("should set user", function (done) {
			isolatedScope.someMethod().then(() => {
				expect(isolatedScope.user).toEqual(mockUser);
				done();
			});
			$scope.$digest();
		});
	});


	describe("component >>", function () {

		let componentController, mockUser = {
			name: 'Alice'
		}, $rootScope;

		beforeEach(inject((UserService, $componentController, $q, _$rootScope_) => {
			$rootScope = _$rootScope_;

			spyOn(UserService, 'getOne').and.returnValue($q.resolve(mockUser));
			componentController = $componentController('userCard2', null, {
				user: mockUser
			})
		}));


		it("should call UserService", inject(function (UserService) {
			componentController.someMethod();
			expect(UserService.getOne).toHaveBeenCalled();
		}));

		it("should set user", function (done) {
			componentController.someMethod().then(() => {
				expect(componentController.user).toEqual(mockUser);
				done();
			});
			$rootScope.$digest();
		});
	});

});