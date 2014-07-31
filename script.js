var app = angular.module("netflixApp", ["firebase"]);

app.controller("MovieCtrl", function($scope, $firebase) {

var ref = new Firebase("http://netflix.firebaseio.com");
var sync = $firebase(ref);

	$scope.movies = sync.$asArray();
	
});