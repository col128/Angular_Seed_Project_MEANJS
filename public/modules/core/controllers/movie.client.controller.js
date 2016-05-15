'use strict';


angular.module('core').controller('movieController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        // Some example string
        $scope.helloText = 'Welcome in moive page';
        $scope.descriptionText = 'the project is empty';
	}
]);
