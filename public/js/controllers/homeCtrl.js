angular.module("mathApp")
    .controller('homeCtrl', function($scope, mainService) {
        $scope.isUser = function() {
            return true;
        };
        $scope.isUser();



    //end of controller.......
});
