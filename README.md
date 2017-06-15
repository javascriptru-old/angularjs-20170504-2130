# angularjs-20170504-2130


Первое занитие - 15.05 (21-30)

## Что подготовить

- JavaScript (https://learn.javascript.ru)
- Ecmascript2015 (https://learn.javascript.ru/es-modern)
- Песочница http://plnkr.co/
- Установить node.js | v6.9.4
- Установить git (+ аккаунт github) + разобраться как делать Pull Request (скринкаст)
- Webpack - https://learn.javascript.ru/screencast/webpack

(Bonus) - TypeScript

## Курсовой проект
- общее задание
- индивидуальный

[12.06]

- [name] [github] [github-page]


???[15.06]- [name] [github] [github-page]


[19.06]

- [name] [github] [github-page]


## Questions
1. AngularJs производительность
2. AngularJS миграция на Angular
3. Не заработали данные методы авторазицации: [тык](https://github.com/javascriptru/angularjs-20170504-2130/blob/master/classwork/lesson5-auth/index.html#L71-L87)  
Хотелось бы иметь наглядный рабочий вариант, сейчас этот код в уроке быстро не проверить.  
4. angular.bootstrap - что это ? пример.  
5. Angular и IE < 11, работает ли он вообще на стрых браузерах? Что еже надо знать о IE и Angular?  
6. $resource и Restangular - что это ? пример.  
7. Это из описания курса: Ресурсы данных. Использование Firebase. ???  
8. [Описание курса](http://learn.javascript.ru/courses/angular1) пункт 4. можно поподробнее по пунктам? 
9. Это из описание курса. Функциональные(e2e) тесты с использованием protractor. ???  
10. Это из описание курса. Вложенные директивы с transclude. ???
11. Это из описание курса. Серверный рендеринг, поисковики. ???


## Заповеди
1. jQuery - это зло (на крайний случай angular.element === jqLite)
2. $scope - это зло
3. ng-controller/ng-include - это большое зло
4. bindings: { '=' } - это зло
5. service/factory - используем что-то одно из сервис-провайдеров
6. $http не инжектировать напрямую в компоненты
7. $scope.$apply() - зло зло зло
8. использовать scope/controller.this в сервисе - зло
9. в контроллере this.Service = Service; - зло
10. resolve только с индикацией загрузки



