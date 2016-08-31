'use strict';

(function(){
  angular
    .module('author')
    .controller('AuthorIndexController', [
        'AuthorFactory',
        '$stateParams',
        '$scope',
        '$resource',
        AuthorIndexControllerFunction
    ])

  function AuthorIndexControllerFunction(AuthorFactory, $stateParams, $scope, $resource){
    $scope.authors = AuthorFactory.query();
  } 
}());
