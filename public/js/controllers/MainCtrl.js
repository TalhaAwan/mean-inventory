'use strict';
angular.module('inventoryApp').controller('MainController', function($scope, $mdSidenav, $mdUtil, $animate) {

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                });
        },200);
        return debounceFn;
    }
});
