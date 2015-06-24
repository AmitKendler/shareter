//angular.module('starter.directives', [])
//
//.directive('map', function () {
//    return {
//        restrict: 'E',
//        scope: {
//            onCreate: '&'
//        },
//        link: function ($scope, $element, $attr) {
//            function initialize() {
//                var mapOptions = {
//                    center: new plugin.google.maps.LatLng(43.07493, -89.381388),
//                    zoom: 16,
//                    mapTypeId: plugin.google.maps.MapTypeId.ROADMAP
//                };
//                var map = new plugin.google.maps.Map($element[0], mapOptions);
//
//                $scope.onCreate({
//                    map: map
//                });
//
//                // Stop the side bar from dragging when mousedown/tapdown on the map
//                plugin.google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
//                    e.preventDefault();
//                    return false;
//                });
//            }
//
//            if (document.readyState === "complete") {
//                initialize();
//            } else {
//                plugin.google.maps.event.addDomListener(window, 'load', initialize);
//            }
//        }
//    }
//});