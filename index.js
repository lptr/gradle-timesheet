(function () {
	var app = angular.module("org.gradle.timesheet", [
		"org.gradle.timesheet.entries",
		"ngRoute",
		"ui.bootstrap.modal"
	]);

	app.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "entries.html"
			});
	});

	app.controller("MainController", function ($scope, $uibModal) {
		// $scope.user = {
		// 	features: {}
		// };
	});

	app.controller("NavLinksController", function ($scope, $location) {
		$scope.isActive = function (viewLocation) {
			var path = $location.path();
			return path.match(viewLocation);
		};
	});
})();
