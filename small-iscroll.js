(function() {
	angular.module('small.iscroll', [])
	.factory('SmallIScrollInstances', [function SmallIScrollInstances(){
			var instances = [];
			function setInstance(id, inst){
				instances[id] = inst;
			}
			function getInstance(id){
				return instances[id];
			}
			function getAllInstances(){
				var ids = [];
				for(var i in instances)
					ids.push(i);
				return ids;
			}
			return{
				get: getInstance,
				set: setInstance,
				getAll: getAllInstances
			}
		}])
	.directive('smallIscroll', ['$interval', 'SmallIScrollInstances', function($interval, SmallIScrollInstances){
			return{
				restrict: 'A',
				scope: {
					refreshInterval: '@',
					config: '=',
					onScrollStart: '&',
					onScrollEnd: '&',
					onScroll: '&'
				},
				link: function(scope, ele, attr){					
					if(!attr.id)
						throw 'small-iscroll require a parrent with "id" attribute';
					
					if(!scope.refreshInterval)
						scope.refreshInterval = 200;
	
					if(!scope.config)
						scope.config = {scrollbars: true, mouseWheel: true, momentum: true};
	
					if(!scope.config.probeType)
						scope.config.probeType = 2;
	
					ele.css('position', 'absolute');
					ele.css('overflow', 'hidden');
					angular.element(ele.children()[0]).css('position', 'absolute');
					var id = "#" + attr.id;				
					var iscroll = new IScroll(id, scope.config);
	
					SmallIScrollInstances.set(id, iscroll);
	
					$interval(function(){
						iscroll.refresh();
					}, Number(scope.refreshInterval));
	
					if(scope.onScroll){					
						iscroll.on('scroll', function(){
							scope.onScroll();
						});
					}
	
					if(scope.onScrollStart){					
						iscroll.on('scrollStart', function(){
							scope.onScrollStart();
						});
					}
	
					if(scope.onScrollEnd){					
						iscroll.on('scrollEnd', function(){
							scope.onScrollEnd();
						});
					}				
				}
			}
		}]);
})();
