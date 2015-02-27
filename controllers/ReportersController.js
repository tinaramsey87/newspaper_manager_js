newspaperManager.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId);
  $scope.addReporter = function() {
    $scope.beat.reporters.push( { name: $scope.reporterName, birthday: $scope.reporterBirthday, years: $scope.employmentYears })
    $scope.reporterName = null;
    $scope.reporterBirthday = null;
    $scope.employmentYears = null;
  }
});
