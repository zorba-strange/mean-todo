'use strict';

(function(){
  angular
    .module('author')
    .controller('AuthorIndexController', [
        'AuthorFactory',
        '$stateParams',
        '$scope',
        AuthorIndexControllerFunction
    ])

  function AuthorIndexControllerFunction(AuthorFactory, $stateParams, $scope){
    $scope.authors = AuthorFactory.query();
    $scope.todos = AuthorFactory.query(function(){
      for(var i = 0; i < $scope.authors.length; i++){
        for(var x = 0; x < $scope.authors[i].todos.length; x++){
          console.log($scope.authors[i].todos[x].title);
        }
      }
    });
  }
}());
