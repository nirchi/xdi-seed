'use strict';

appControllers

    .controller('MapCtrl', function ($scope) {

        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
    });