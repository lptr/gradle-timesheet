(function () {
	var app = angular.module("org.gradle.timesheet.entries", [
		"ngRoute",
		"ui.bootstrap.modal"
	]);

	app.controller("FormController", function ($scope, $uibModal) {
		$scope.add = function () {
			$scope.entries.push({
				project: null,
				days: 0
			});
		};
		$scope.remove = function (index) {
			$scope.entries.splice(index, 1);
		};
		$scope.sumDays = function () {
			return $scope.entries.reduce(function (sum, entry) {
				if (isNaN(entry.days)) {
					return sum;
				}
				return sum + entry.days;
			}, 0);
		};

		$scope.reset = function () {
			$scope.loaded = true;
			$scope.date = new Date();
			$scope.entries = [];
			$scope.add();
			$scope.projects = [
				{
					group: "Time Off",
					name: "Vacation"
				},
				{
					group: "Time Off",
					name: "Public holidays"
				},
				{
					group: "Time Off",
					name: "Sick days"
				},
				{
					group: "Time Off",
					name: "Unpaid time off"
				},

				{
					group: "General",
					name: "Product management"
				},
				{
					group: "General",
					name: "Sales support"
				},
				{
					group: "General",
					name: "Recruiting"
				},
				{
					group: "General",
					name: "Free user support"
				},
				{
					group: "General",
					name: "Conferences"
				},
				{
					group: "General",
					name: "General & Administrative"
				},
				{
					group: "General",
					name: "Summit & Worldmeeting"
				},
				{
					group: "General",
					name: "1on1s and coordination meetings"
				},
				{
					group: "General",
					name: "Free user training"
				},

				{
					group: "Services",
					name: "Paid user support"
				},
				{
					group: "Services",
					name: "Consulting"
				},
				{
					group: "Services",
					name: "Paid user training"
				},

				{
					group: "Internal Projects",
					name: "#modular-java"
				},
				{
					group: "Internal Projects",
					name: "#ci-health"
				},
				{
					group: "Internal Projects",
					name: "#buildship"
				},
				{
					group: "Internal Projects",
					name: "#composite-builds"
				},
				{
					group: "Internal Projects",
					name: "#kotlin-dsl"
				},
				{
					group: "Internal Projects",
					name: "#performance"
				},
				{
					group: "Internal Projects",
					name: "#dev-infrastructure"
				},
				{
					group: "Internal Projects",
					name: "#gradle-core"
				},
				{
					group: "Internal Projects",
					name: "#guides"
				},
				{
					group: "Internal Projects",
					name: "#ios-support"
				},
				{
					group: "Internal Projects",
					name: "#distributed-builds"
				},
				{
					group: "Internal Projects",
					name: "#newsletter"
				},
				{
					group: "Internal Projects",
					name: "#build-cache"
				},
				{
					group: "Internal Projects",
					name: "#stable-native"
				},
				{
					group: "Internal Projects",
					name: "#play-support"
				},
				{
					group: "Internal Projects",
					name: "#stable-plugin-dsl"
				},
				{
					group: "Internal Projects",
					name: "#swift-support"
				},

				{
					group: "Cloud Services",
					name: "#build-cache"
				},

				{
					group: "Partner Projects",
					name: "#apple-siri-cache (M3)"
				},
				{
					group: "Partner Projects",
					name: "#apple-siri-cache (M4)"
				}
			];
		};

		var reload = function() {
			var sheetId = $scope.sheetId;
			var date = $scope.date;
			if (!sheetId || !date) {
				return;
			}

			alert("Got both: " + sheetId + " - " + date);
		}

		$scope.reset();

		$scope.$watch("data", reload);
		$scope.$watch("sheetId", reload);
	});
})();
