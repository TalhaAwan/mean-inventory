/**
 * Created by talha on 8/14/15.
 */

'use strict';

angular.module('inventoryApp').controller('ItemController', function($scope, Item, $mdDialog, $timeout) {

    Item.getItems("", function(result){
        $scope.items = result.data
    },
    function(err){
        console.log(err)
    });

    $scope.searchTextChanged = function(){
      Item.getItems($scope.searchText, function(result){
        $scope.items = result.data
    },
    function(err){
        console.log(err)
    })

    }


    $scope.openAddItemDialog = function(ev) {
        $mdDialog.show({
            controller: AddItemController,
            templateUrl: '/views/dialogs/add-item.html',
            targetEvent: ev
        })
            .then(function(item) {
                $scope.items.push(item);
            }, function() {
            });
    };



    $scope.editItem = function(ev, item, index){
        $mdDialog.show({
            controller: EditItemController,
            templateUrl: '/views/dialogs/edit-item.html',
            locals:{
              "item": angular.copy(item)
            },
            targetEvent: ev
        })
            .then(function(item) {
                if(item){
                    $scope.items[index] = item;
                }
            }, function() {
            });

        $timeout(function(){
            item.editClicked = false;
        }, 100)
    };


});


function AddItemController ($scope, $mdDialog, Item){

    $scope.addItem = function(){
        Item.addItem($scope.item, function(data){
            $mdDialog.hide(data);
        }, function(){

        })
    }
    $scope.closeDialog = function () {
        $mdDialog.hide([]);
    }
}


function EditItemController ($scope, $mdDialog, item, Item){
    $scope.item = item;
    $scope.deleteItem = function(ev, item){
        Item.deleteItem($scope.item._id, function(data){
                console.log(data);
                $mdDialog.hide(data);
            },
            function(err){
                console.log(err)
            })
    };


    $scope.editItem = function(){
        Item.editItem($scope.item, function(data){
            $mdDialog.hide(data);
        }, function(error){
            console.log(error)
        })
    }

    $scope.closeDialog = function () {
        $mdDialog.hide();
    }
}