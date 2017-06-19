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
- Anton Kondrasev     https://github.com/akondrasev/akondrasev.github.io    https://akondrasev.github.io/#!/
- Балюк Дмитрий https://github.com/dedpnd/dedpnd.github.io https://dedpnd.github.io/public/


[После]
- [name] [github] [github-page]



## Questions
1. AngularJs производительность   ✓
2. AngularJS миграция на Angular   ✓
3. Серверный рендеринг, поисковики. ✓
4. angular.bootstrap ✓
5. AngularJs и IE < 11, браузерная поддержка - https://docs.angularjs.org/guide/ie  ✓
6. $resource и Restangular  ($http)  ✓
7. Firebase ✓
8. Angular Forms ✓
9. Функциональные(e2e) тесты с использованием protractor ✓
10. transclude  ✓
11. AngularJS + ES6 import ✓
12. localization ✓

## Что-то никак не получится
( Заполняем в формате: [названием темы] [описание проблемы] [я старался(ссылка на github)] )

1. методы авторазицации на событиях (https://github.com/javascriptru/angularjs-20170504-2130/blob/master/classwork/lesson5-auth/index.html#L71-L87)
2. [Karma + webpack] [ошибки при запуске karma start] [я старался( https://github.com/dedpnd/angularjs-karma-webpack )]
3. Разбиение приложения на отдельные файлы (по-компонентно) вызывает массу ошибок типа $Injector:XXX (nomod, modulerr, unpr)
   не понятно как прописывать зависимости

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



