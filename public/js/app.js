angular.module("mathApp", ['ui.router'])

.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('createUser', {
        url: '/createUser',
        controller: 'mainCtrl',
        templateUrl: './js/views/createUserview.html'
     })

    .state('login', {
        url: '/',
        controller: 'mainCtrl',
        templateUrl: './js/views/loginview.html'
     })

    .state('home', {
        url: '/home',
        controller: 'homeCtrl',
        templateUrl: './js/views/homeview.html'
    })

    .state('add', {
        url: '/add',
        controller: 'addCtrl',
        templateUrl: './js/views/addview.html'
    })

    .state('subtract', {
        url: '/subtract',
        controller: 'subtractCtrl',
        templateUrl: './js/views/subtractview.html'
    })

    .state('multiply', {
        url: '/multiply',
        controller: 'multiplyCtrl',
        templateUrl: './js/views/multiplyview.html'
    })

    .state('divide', {
        url: '/divide',
        controller: 'divideCtrl',
        templateUrl: './js/views/divideview.html'
    })

    .state('scores', {
        url: '/scores',
        controller: 'scoresCtrl',
        templateUrl: './js/views/scoresview.html'
    })

    .state('admin', {
        url: '/admin',
        templateUrl: './js/views/adminview.html',
        controller: 'adminCtrl'
    });




    // end of config //
})

.directive('mltplyDir', function() {
    return {
        // scope: {},
        templateUrl: './js/Directives/mltplydir.html'
    };
})

.directive('userDir', function() {
    return {
        // scope: {},
        templateUrl: './js/Directives/userdir.html'
    };
})

.directive('scoresDir', function() {
    return {
        // scope: {},
        templateUrl: './js/Directives/scoresdir.html'
    };
});

// .directive('noNavDir', function() {
//     return {
//         templateUrl: './JS/Directives/noNavdir.html'
//     };
// });
