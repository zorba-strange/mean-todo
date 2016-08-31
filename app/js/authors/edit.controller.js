'use strict';

(function(){
  angular
    .module('author')
    .controller('AuthorEditController', [
        '$scope',
        '$stateParams',
        'AuthorFactory',
        AuthorEditControllerFunction
    ])
    function AuthorEditControllerFunction($scope, $stateParams, AuthorFactory){
      var vm = this;
      vm.author = AuthorFactory.get({id: $stateParams.id});
      vm.update = function(author){
        vm.author.$update({id: vm.author._id});
      }
    }
}());
