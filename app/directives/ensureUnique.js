"use strict"
angular.module('myApp', [])
    .directive('ensureUnique', ['$http', function($http){
    return {
        require: 'ngModel',
        link: function(scope, ele, attrs, c){
            scope.$watch(attrs.ngModel, function(n) {
                if(!n) return;
                /*$http({
                    method: 'POST',
                    url: 'api/check/' + attrs.ensureUnique,
                    data: {'field': attrs.ensureUnique}
                }).success(function(data){
                    c.$setValidity('unique', data.isUnique);
                }).error(function(data){
                    console.error('Error while processing ensureUnique.')
                    c.$setValidity('unique', false);
                });*/
                if(n==='Sandeep'){
                    c.$setValidity('unique', true);
                } else {
                    c.$setValidity('unique', false);
                }
            });
        }
    }
}]);