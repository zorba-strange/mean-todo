'use strict';

(function(){
  angular
    .module('author')
    .controller('AuthorNewController', [
        '$stateParams',
        '$state',
        'AuthorFactory',
        AuthorNewControllerFunction
    ])

    console.log('before new controller');
    function AuthorNewControllerFunction($stateParams, $state, AuthorFactory){
      var vm = this;
      vm.author = new AuthorFactory();
      vm.create = function($scope){
        var author = vm.author;
        author.$save().then(function(){
          console.log("author create");
          $state.go('authorsIndex');
        });
      }
    }
}());



