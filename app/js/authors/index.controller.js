'use strict';

(function(){
  angular
    .module('author')
    .controller('AuthorIndexController', [
        '$stateParams',
        AuthorIndexControllerFunction
    ])

    console.log('before author idnex');
  function AuthorIndexControllerFunction(AuthorFactory, $stateParams){
    console.log('Author Index Controller');
  }
}());
