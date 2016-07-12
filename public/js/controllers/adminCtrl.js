angular.module("mathApp")
    .controller('adminCtrl', function($scope, mainService) {

        $scope.getUsers = function() {   //admin
            // console.log();
            mainService.getUsers()
            .then((response) => {
                // console.log(response);
                $scope.data = response.data;
                console.log($scope.data);
            });
        };

        $scope.deleteUsers = function() {   //admin
            // console.log();
            mainService.deleteUsers()
            .then((response) => {
                // console.log(response);
                $scope.data = response.data;
                console.log($scope.data);
            });
        };
    //end of controller..........
});
