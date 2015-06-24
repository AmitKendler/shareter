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

.controller('AddShelterCtrl', ['$scope', '$cordovaGeolocation', function ($scope, $cordovaGeolocation) {

    $scope.loading = false;

    $scope.fillDataByLocation = function () {

        $scope.loading = true;

        $scope.city = "";
        $scope.street = "";
        $scope.streetNo = ""

        var posOptions = {
            timeout: 10000,
            enableHighAccuracy: true
        };

        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;

                var request = {
                    'position': {
                        'lat': lat,
                        'lng': lng
                    },
                    'locale': "iw"
                };

                plugin.google.maps.Geocoder.geocode(request, function (results) {
                    if (results.length) {
                        var result = results[0];

                        var address = [
      result.subThoroughfare || "",
      result.thoroughfare || "",
      result.locality || "",
      result.adminArea || "",
      result.postalCode || "",
      result.country || ""].join(", ");

                        $scope.city = result.locality;
                        $scope.street = result.thoroughfare;
                        $scope.streetNo = parseInt(result.subThoroughfare);
                        $scope.loading = false;
                        alert(address);
                        $scope.$apply();
                    } else {
                        alert("Not found");
                    }
                });


            }, function (err) {
                // error
            });
    };

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