var newspaperManager = angular.module('newspaperManager', ['ui.router']);

newspaperManager.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "BeatsCtrl"
  });
});
