var app = (function () {
  'use strict';

  var module = angular.module('myApp', ['ionic']);

  module.run(moduleRun);
  moduleRun.$inject = ['$ionicPlatform', '$rootScope'];
  function moduleRun($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      //Platform is ready
    });
  }

  module.config(moduleConfig);
  moduleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function moduleConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'LoginController'
      })
      .state('logout', {
        url: '/logout',
        templateUrl: '',
        controller: 'LogoutController'
      })
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'menu.html'
      })
      .state('app.tab', {
        url: '/tab',
        abstract: true,
        views: {
          'menuContent': {
            controller: 'TabsController',
            templateUrl: 'tabs.html'
          }
        }
      })

      /* All tabs with their own navigation stack */
      .state('app.tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.tab.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            templateUrl: 'contact.html',
            controller: 'ContactController'
          }
        }
      })
      .state('app.tab.contactDetail', {
        url: '/contact',
        views: {
          'tab-contact@app.tab': {
            templateUrl: 'contact-detail.html',
            controller: 'ContactDetailController'
          }
        }
      })
      .state('app.tab.chat', {
        url: '/chat',
        views: {
          'tab-chat': {
            templateUrl: 'chat.html',
            controller: 'ChatController'
          }
        }
      })
      .state('app.tab.history', {
        url: '/history',
        views: {
          'tab-history': {
            templateUrl: 'history.html',
            controller: 'HistoryController'
          }
        }
      })
      .state('app.tab.setting', {
        url: '/setting',
        views: {
          'tab-setting': {
            templateUrl: 'setting.html',
            controller: 'SettingController'
          }
        }
      });

    $urlRouterProvider.otherwise(function ($injector) {
      $injector.get('$state').go('login');
    });
  }

  module.controller('LoginController', LoginController);
  LoginController.$inject = ['$scope'];
  function LoginController($scope) {
    console.log('LoginController');
  }

  module.controller('LogoutController', LogoutController);
  LogoutController.$inject = ['$scope', '$state'];
  function LogoutController($scope, $state) {
    console.log('LogoutController');
    $state.go('login');
  }

  module.controller('NavBarController', NavBarController);
  NavBarController.$inject = ['$scope'];
  function NavBarController($scope) {
    console.log('NavBarController');
  }

  module.controller('SideMenuController', SideMenuController);
  SideMenuController.$inject = ['$scope'];
  function SideMenuController($scope) {
    console.log('SideMenuController');
  }

  module.controller('TabsController', TabsController);
  TabsController.$inject = ['$scope'];
  function TabsController($scope) {
    console.log('TabsController');
  }

  module.controller('HomeController', HomeController);
  HomeController.$inject = ['$scope'];
  function HomeController($scope) {
    console.log('HomeController');
  }

  module.controller('ContactController', ContactController);
  ContactController.$inject = ['$scope'];
  function ContactController($scope) {
    console.log('ContactController');

    $scope.$on("$ionicView.afterLeave", function(event, data){
       // handle event
       console.log("$ionicView.afterLeave is FIRED from ContactController!");
    });

    $scope.$on("$ionicParentView.afterLeave", function(event, data){
       // handle event
       //console.log("$ionicParentView.afterLeave is FIRED from ContactController!");
    });
  }

  module.controller('ContactDetailController', ContactDetailController);
  ContactDetailController.$inject = ['$scope'];
  function ContactDetailController($scope) {
    console.log('ContactDetailController');

    $scope.$on("$ionicView.afterLeave", function(event, data){
       // handle event
       console.log("$ionicView.afterLeave is FIRED from ContactDetailController!");
    });

    $scope.$on("$ionicParentView.afterLeave", function(event, data){
       // handle event
       //console.log("$ionicParentView.afterLeave is FIRED from ContactDetailController!");
    });
  }

  module.controller('ChatController', ChatController);
  ChatController.$inject = ['$scope'];
  function ChatController($scope) {
    console.log('ChatController');
  }

  module.controller('HistoryController', HistoryController);
  HistoryController.$inject = ['$scope'];
  function HistoryController($scope) {
    console.log('HistoryController');

    $scope.$on("$ionicView.enter", function(event, data){
      console.log("History view entered");
    });
  }

  module.controller('SettingController', SettingController);
  SettingController.$inject = ['$scope'];
  function SettingController($scope) {
    console.log('SettingController');
  }

  return module;
})();
