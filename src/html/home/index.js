(function () {
    'use strict';
    // module master file , here you create module related components
    angular.module('myApp').controller('homeController', ["$scope","$state", require('./home.ctl')]);
})();