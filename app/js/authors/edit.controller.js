'use strict';

(function(){
  angular
    .module('author')
    .controller('AuthorEditController', [
        '$state',
        '$stateParams',
        'AuthorFactory',
        AuthorEditControllerFunction
    ])
    function AuthorEditControllerFunction($state, $stateParams, AuthorFactory){
      var vm = this;
      vm.author = AuthorFactory.get({id: $stateParams.id});
      vm.update = function(author){
        vm.author.$update({id: vm.author._id}).then(function(){;
          $state.go('authorShow', {id: vm.author._id});
        })
      }
      vm.kill = function(author){
        vm.author.$remove({id: vm.author._id}).then(function(){
          $state.go('authorsIndex');
        });
      }
    }
}());
