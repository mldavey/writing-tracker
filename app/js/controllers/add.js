myApp.controller('AddController', ['$scope', 'dateFilter', function($scope, dateFilter) {
	$scope.entry = {
		'project': '',
		'id': '',
		'startDate': '',
		'startTime': '',
		'endDate': '',
		'endTime': '',
		'timeSpent': '',
		'accomplished': '',
		'wordsCompleted': '',
		'notes': ''
	}

	//Use timestamp for entry ID
	$scope.entry.id = new Date();
	$scope.entry.id = dateFilter($scope.entry.id, "MMddyyyyHHmmss"); // for conversion to string

	//Automatically calculate the time spent
	$scope.calculateTimeSpent = function() {

		var startDateTime, endDateTime, hoursSpent;

		if($scope.entry.startDate && $scope.entry.startTime && $scope.entry.endDate && $scope.entry.endTime) {
			startDateTime = new Date($scope.entry.startDate + ' ' + $scope.entry.startTime);
			endDateTime = new Date($scope.entry.endDate + ' ' + $scope.entry.endTime);

			hoursSpent = (endDateTime - startDateTime)/3600000; //find the difference and convert to hours
			if(hoursSpent > 0 && hoursSpent !== null) {
				$scope.entry.hoursSpent = hoursSpent;
			}
		}
	}

	$scope.add = function() {

		firebase.database().ref('entries/' + $scope.entry.id).set({
			project: $scope.entry.project,
			startTimeStamp: $scope.entry.startDate + ' ' + $scope.entry.startTime,
			endTimeStamp: $scope.entry.endDate + ' ' + $scope.entry.endTime,
			hoursSpent: $scope.entry.hoursSpent,
			accomplished: $scope.entry.accomplished,
			wordsCompleted: $scope.entry.wordsCompleted,
			notes: $scope.entry.notes
		});
	}

}]);