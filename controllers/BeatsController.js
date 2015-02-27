newspaperManager.controller('BeatsCtrl', function BeatsCtrl($scope, BeatsFactory, UtilitiesFactory) {
  $scope.beats = BeatsFactory.beats;
  $scope.BeatsFactory = BeatsFactory;
});
