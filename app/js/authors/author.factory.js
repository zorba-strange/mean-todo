'use strict';

(function(){
  angular
    .module('author')
    .factory('AuthorFactory', [
        '$resource',
        AuthorFactoryFunction
    ]);
  function AuthorFactoryFunction($resource){
    console.log('authorFactory');
    return $resource("http://localhost:8080/authors/:id", {}, {
      update: { method: "PUT" }
    });
  };
}());
