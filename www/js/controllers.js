angular.module('starter.controllers', [])

.controller('MenuCtrl', ['$rootScope', '$scope', '$ionicSideMenuDelegate', function ($rootScope, $scope, $ionicSideMenuDelegate) {

    $scope.$watch(function () {
        return $ionicSideMenuDelegate.getOpenRatio();
    }, function (newValue, oldValue) {
        if (newValue == 0) {
            $scope.hideRight = true;
        } else {
            $scope.hideRight = false;
        }
    });
}])

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});