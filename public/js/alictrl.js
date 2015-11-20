"use strict";
(function(){
	var aliController = function($scope, $http){
		$scope.text1 = "";
		$scope.text2 = "";
		$scope.text3 = "";
		$scope.text4 = "";
		$scope.text5 = "";
		$scope.text6 = "";
		$scope.text7 = "";
		$scope.id1 = "";
		$scope.name = "";
		$scope.name2 = "";
		$scope.name3 = "";

		$scope.sinaApp = function(){
			$http.get('/sina').success(function(data){
				$scope.text1 = data;
			}).error(function(){
				console.log('Error on reading hello Sina!');
			});
		};
		$scope.furtuneApp = function(){
			$http.get('/fortune').success(function(data){
				$scope.text2 = data;
			}).error(function(){
				console.log('Error on reading furtune');
			});
		};
		$scope.gelistApp = function(){
			$http.get('/getList').success(function(data){
				$scope.text3 = data;
			}).error(function(){
				console.log('Error on reading getList App');
			});
		};
		$scope.gelistbyIdApp = function(){
			$http.get('/getList' + $scope.id1).success(function(data){
				$scope.text4 = (data);
			}).error(function(){
				console.log('Error on reading getList App');
			});
		};

		$scope.checkerApp = function(){
			$http.get('/checker/', {name: $scope.name}).success(function(data){
				$scope.text5 = data;
			}).error(function(){
				console.log('Error on reading getList App');
			});
		};
		$scope.checker2App = function(){
			$http.get('/checker2' + '?name=' + $scope.name2).success(function(data){
				$scope.text6 = data;
			}).error(function(){
				console.log('Error on reading getList App');
			});
		};
		$scope.checker3App = function(){
			$http.post('/checker3/', {name: $scope.name3}).success(function(data){
				$scope.text7 = data;
			}).error(function(){
				console.log('Error on reading getList App');
			});
		};

	};
	aliController.$inject = ['$scope', '$http'];
	angular.module('connect').controller('aliController', aliController);
}());