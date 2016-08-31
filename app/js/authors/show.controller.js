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
      var vm = this;
      var author;
      $scope.author = AuthorFactory.get({id: $stateParams.id});
      console.log($stateParams.id);
    }
}());
