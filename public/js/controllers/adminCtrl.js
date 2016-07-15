angular.module("mathApp")
    .controller('adminCtrl', function($scope, $state, $cookies, mainService) {

        $scope.currentDate = new Date();

        $scope.user = $cookies.getObject("currentUser");

        if ($scope.user[0].isAdmin === false) {

            $state.go('home');
            sweetAlert("Oops...", "You're not an admin!", "error");
        }

        console.log("currentuser", $scope.user);



        $scope.getUsers = function() {   //admin
            // console.log();
            mainService.getUsers()
            .then((response) => {
                // console.log(response);
                $scope.data = response.data;
                console.log($scope.data);
            });
        };

        $scope.getScores = function() {   //admin
            // console.log();
            mainService.getScores()
            .then((response) => {
                // console.log(response);
                $scope.data = response.data;
                console.log($scope.data);
            });
        };
    //end of controller..........
});
