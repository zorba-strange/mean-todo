'use strict';

(function(){
  angular
    .module('todo', [
        'ui.router',
        'author',
    ])
    .config([
        '$stateProvider',
        RouterFunction
    ])
    function RouterFunction($stateProvider){
      console.log('router');
      $stateProvider
        .state('authorsIndex', {
          url: '',
          templateUrl: 'js/authors/index.html',
          controller: 'AuthorIndexController',
          contollerAs: 'vm'
        })
    }
}());