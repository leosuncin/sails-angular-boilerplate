'use strict';

/**
 * @ngdoc overview
 * @name sailsAngularBoilerplateApp
 * @description
 * # sailsAngularBoilerplateApp
 *
 * Main module of the application.
 */
angular
    .module('sailsAngularBoilerplateApp', [
        'ngAnimate',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'sailsAngularBoilerplateApp.templates'
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            // For any unmatched url, redirect to /
            $urlRouterProvider.otherwise('/');

            // Remove hashtagelena.cruz.3576?fref=ufi
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');

            // Now set up the states
            $stateProvider
            .state('state-main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .state('state-angular', {
                url: '/angular',
                templateUrl: 'views/angular.html'
            })
            .state('state-sails', {
                url: '/sails',
                templateUrl: 'views/sails.html'
            });
        }
    ])
    .run([
        '$rootScope',
        '$state',
        '$stateParams',
        function($rootScope, $state, $stateParams) {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class='{ active: $state.includes('contacts.list') }'> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);
