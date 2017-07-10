/**
 * Created by talha on 8/14/15.
 */
'use strict';
angular.module('inventoryApp').factory('Item', ['$http', function($http) {

    return {
        addItem: function (credentials, success, error) {
            $http.post('/items/', credentials, {}).
                success(function (data) {
                    success(data)
                }).
                error(function (e) {
                    error(e);
                });
        },
        editItem: function (credentials, success, error) {
            $http.put('/items/', credentials, {}).
                success(function (data) {
                    success(data)
                }).
                error(function (e) {
                    error(e);
                });
        },
        deleteItem: function (itemID, success, error) {
            $http.delete('/items/'+itemID, {}).
                success(function (data) {
                    success(data)
                }).
                error(function (e) {
                    error(e);
                });
        },

        getItems: function (success, error) {
            $http.get('/items/').
                success(function (data) {
                    success(data)
                }).
                error(function (e) {
                    error(e);
                });
        },
        searchItems: function (searchText, success, error) {
            $http.get('/items/search/'+searchText).
                success(function (data) {
                    success(data)
                }).
                error(function (e) {
                    error(e);
                });
        }


    }

}]);