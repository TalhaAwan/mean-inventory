/**
 * Created by talha on 8/14/15.
 */

'use strict';

angular.module('inventoryApp').controller('ItemController', function($scope, Item, $mdDialog, $filter, $timeout) {

    Item.getItems("", function(result){
        $scope.items = result.data;
    },
    function(err){
        console.log(err)
    });


    //TODO Integrate database search
    $scope.searchTextChanged = function(){
      Item.getItems($scope.searchText, function(result){
        $scope.items = result.data;
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
            .then(function(result) {
                if(result.status == 200){
                    $scope.items.push(result.data);
                }

            }, function() {
                console.log("Dialog Cancelled");
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
            .then(function(result) {
                if(result.status == 200){
                    if(result.data){
                        $scope.items[index] = result.data;
                    }
                    else{
                        $scope.items.splice(index, 1);
                    }
                }            
            }, function(){
                console.log("Dialog Cancelled");

            });

    };


});


function AddItemController ($scope, $mdDialog, Item){

    $scope.addItem = function(){
        Item.addItem($scope.item, function(data){
            $mdDialog.hide(data);
        }, function(err){
            console.log(err);
            $mdDialog.hide();
        })
    }
    $scope.closeDialog = function () {
        $mdDialog.cancel();
    }
}


function EditItemController ($scope, $mdDialog, item, Item){
    $scope.item = item;
    $scope.deleteItem = function(ev, item){
        Item.deleteItem($scope.item._id, function(data){
                $mdDialog.hide(data);
            },
            function(err){
                console.log(err)
                $mdDialog.hide(err);
            })
    };


    $scope.editItem = function(){
        Item.editItem($scope.item, function(data){
            $mdDialog.hide(data);
        }, function(err){
            console.log(err)
            $mdDialog.hide(err);

        })
    }

    $scope.closeDialog = function () {
        $mdDialog.cancel();
    }
}