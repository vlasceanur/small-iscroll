(function(){
	angular.module('myapp', ['small.iscroll'])
	.controller('AppController', function($scope, SmallIScrollInstances){
		var list = [];

		for(var i=0; i< 1000; i++){
			list.push('List item ' + i);
		}

		$scope.items = list;
		$scope.limit = 10;

		$scope.onScroll = function(){
			console.log('scrolling')
		}

		$scope.onscrollend = function(param){
			console.log('scroll end', SmallIScrollInstances.get(param));
		}

		$scope.onscrollstart = function(){
			console.log('scroll start');
		}
	});
})();