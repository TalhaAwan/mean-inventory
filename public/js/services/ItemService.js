/**
 * Created by talha on 8/14/15.
 */
'use strict';
angular.module('inventoryApp').factory('Item', ['$http', function($http) {

    return {
        addItem: function (credentials, success, error) {
            $http.post('/items/', credentials, {}).
                then(function (data) {
                    success(data)
                }, function (e) {
                    error(e);
                });
        },
        editItem: function (credentials, success, error) {
            $http.put('/items/', credentials, {}).
                then(function (data) {
                    success(data)
                }, function (e) {
                    error(e);
                });
        },
        deleteItem: function (itemID, success, error) {
            $http.delete('/items/'+itemID, {}).
                then(function (data) {
                    success(data)
                }, function (e) {
                    error(e);
                });
        },

        getItems: function (searchText, success, error) {
            $http.get('/items/?search='+searchText).
                then(function (data) {
                    success(data)
                }, function (e) {
                    error(e);
                });
        }


    }

}]);