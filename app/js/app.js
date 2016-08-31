'use strict';

(function(){
  angular
    .module('todo', [
        'author',
        'ui.router'
    ])
    .config([
        '$stateProvider',
        RouterFunction
    ])
    function RouterFunction($stateProvider){
      $stateProvider
        .state('authorsIndex', {
          url: '',
          templateUrl: 'js/authors/index.html',
          controller: 'AuthorIndexController',
          contollerAs: 'vm'
        })
        .state('authorNew', {
          url: '/new',
          templateUrl: 'js/authors/new.html',
          controller: 'AuthorNewController',
          controllerAs: 'vm'
        })
        .state('authorShow', {
          url: '/authors/:id',
          templateUrl: 'js/authors/show.html',
          controller: 'AuthorShowController',
          controllerAs: 'vm'
        })
    }
}());
