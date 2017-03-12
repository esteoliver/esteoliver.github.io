var app = angular.module('esteoliverApp', ['ngRoute']);

app.controller('MainCtrl', [
  '$scope',
  '$interval',
  function ($scope, $interval) {

    var names = [
      'Bandido',
      'Banquito',
      'Banco',
      'Banano',
      'Bandolero',
      'Pana'
    ];

    var current = 0;

    $scope.name = names[current];

    $scope.toggleProfessional = function () {
      $scope.showProfessional = !$scope.showProfessional;
      $scope.showPersonal = false;
    };

    $scope.togglePersonal = function () {
      $scope.showPersonal = !$scope.showPersonal;
      $scope.showProfessional = false;
    };

    // $interval(function () {
    //   console.log('ok');
    //   $scope.name = next();
    // }, 500);

    function next () {
      return names[current++ % names.length];
    }
  }
]);
