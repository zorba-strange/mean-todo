'use strict';

(function(){
  angular
    .module('author')
    .controller('AuthorNewController', [
        '$stateParams',
        '$scope',
        'AuthorFactory',
        AuthorNewControllerFunction
    ])

    console.log('before new controller');
    function AuthorNewControllerFunction($stateParams, $scope, AuthorFactory){
      var vm = this;
      vm.author = new AuthorFactory();
      vm.create = function($scope){
        console.log(vm.author);
        var author = vm.author;
        author.$save(); 
        console.log(author);
      }
    }
}());



