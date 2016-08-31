'use strict';

(function(){
  angular
    .module('author')
    .controller('AuthorShowController', [
        '$stateParams',
        '$state',
        '$scope',
        '$resource',
        'AuthorFactory',
        AuthorShowControllerFunction
    ])
    function AuthorShowControllerFunction($stateParams, $state, $scope, $resource, AuthorFactory){
      AuthorFactory.get({id: $stateParams.id}).$promise.then(function(data){
        $scope.author = data;
        // $scope.author.todos.push({title: 'testVAn'});
      })
    }
}());
