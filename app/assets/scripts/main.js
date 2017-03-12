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

    var images = [
      'caracas',
      'code'
    ];

    var current = 0;
    var currentImage = 0;

    $scope.name = names[current];
    $scope.bgImage = images[currentImage];

    $scope.toggleProfessional = function () {
      $scope.showProfessional = !$scope.showProfessional;
      $scope.showPersonal = false;
    };

    $scope.togglePersonal = function () {
      $scope.showPersonal = !$scope.showPersonal;
      $scope.showProfessional = false;
    };

    $interval(function () {
      // $scope.name = next();
      $scope.bgImage = nextImage();
    }, 10000);

    function next () {
      return names[current++ % names.length];
    }

    function nextImage () {
      return images[currentImage++ % images.length];
    }
  }
]);
