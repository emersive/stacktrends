app.controller('stackTrendController', function($scope, $http, $resource){

    $scope.hello = "Hello, World!";

	// var framework_forks = $resource('http\\://localhost\\:3000/api-forks');
	// framework_forks.get({}, function() {

	// }

// 	$resource('http\\://localhost\\:3000/api-forks');
// framework_forks.get({}, function() {

// }

	// $http.defaults.useXDomain = true;
	var framework_forks = $resource('http://localhost:3000/api-forks');
    $scope.github_framework_forks = framework_forks.query(); 
    console.log($scope.github_framework_forks);

	// $scope.framework_forks = framework_forks;
	// $scope.$apply();
});