var dogApp = angular.module('dogApp', []);

dogApp.controller('headerController', function headerController($scope) {
    $scope.myName = 'Saugandh';
})

dogApp.controller('mainController', function headerController($scope, $http) {
    $http.get('https://dog.ceo/api/breeds/list/all').then(function(data) {
        $scope.dogBreeds = data;
    }, function(error) {
        $scope.errorMessage = error;
    }, function(rejection) {
        $scope.rejection = rejection;
    })
})