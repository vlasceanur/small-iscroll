# small-iscroll
Small angularjs wrapper for IScroll5 probe version

This module is a small wrapper around IScroll5 probe version
To use this module you have to include 'castrol.iscroll' module in your application

This module expose one directive and one service

Directive:
	*castrol-iscroll
	This directive require an ID attribute and it sets the parent and the first child position to absolute. Also sets overflow hidden on parrent
	You can pass the following attributes to configure the directive:
		refreshInterval: '@', 	(default: 200ms)
		config: '=',			(default: {scrollbars: true, mouseWheel: true, momentum: true, probeType: 2};)
		onScrollStart: '&',		
		onScrollEnd: '&',
		onScroll: '&'

	After initialization, the IScroll instance that was created is saved to CastrolIScrollInstances using the element id as key

Service:
	*CastrolIScrollInstances
	This service holds all references to IScroll instances
	It expose the following methods:
		get(id)						Get the IScroll instance asociated with the specified id
		set(id, instance)			Set the IScroll instance with the specified id as key (used by castrol-iscroll directive to save the instances it creates)
		getAll()					Get an array with all ids of saved IScroll instances		
