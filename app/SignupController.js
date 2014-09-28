"use strict"
function SignupController($scope) {
    $scope.submitted = false;
    $scope.signupForm = function(){
        if($scope.signup_form.$valid){
            
        } else {
            $scope.signup_form.submitted = true;
        }
    }
}
angular.module('myApp').controller('SignupController', ['$scope', SignupController]);