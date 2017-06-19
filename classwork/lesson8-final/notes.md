


1 -> html <-> model/scope <-> firebase(database)  <-> model/scope <-> html -> 2

NoSQL + socket connection
$scope.$apply()


<input ng-model="user.name" ensure-unique>
<input ng-model="user.name" type="email" overwrite-email>

require: 'ngModel',

ngModelController.$setValidity()






<modal>

<user-list>
</user-list>

</modal>






`
<div>
asdfasfdasf
asdf
asf
<ng-transclude></ng-transclude>
dsaf
asdf

</div>`







ES6 + import + injection

- full notation
- ngAnnotate ("ngInject")
- .$inject

app.component('my', {
	controller:
});

function myComponentController(UserService) {

}
myComponentController.$inject = ['UserService'];


class myComponentController {
	static $inject = ['UserService'];

	contructor(UserService) {

	}
}




module1/componests,services...  index.js
module2/       ...              index.js
module3/       ...              index.js





Идеальная струтура для миграции на Angular

1. ng-include & ng-controller
2. component oriented approach
3. "<"   (not "=")
4. $onInit  (>1.6)