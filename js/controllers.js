var myNameSpace = angular.module('myApp', []);


myNameSpace.controller('myController', function myController($scope) {
    $scope.author = {
        'name' : 'Cavin',
        'title' : 'front-end developer',
        'company' : 'Stizelwebs'
    }
});


