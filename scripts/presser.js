/**
 * Created by zeevjelinek on 7/6/14.
 */

var myPubApp = angular.module('nyPubNub',[]);

myPubApp.controller('Presser',function($scope){
  $scope.imPressed = function () {
    alert('yo');
  };
});