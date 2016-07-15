angular.module("mathApp")
    .controller('scoresCtrl', function($scope, $cookies, mainService) {

        $scope.currentDate = new Date();

        $scope.user = $cookies.getObject("currentUser");

        $scope.scores = function() {
            console.log($cookies.getObject("currentUser"));
            console.log($scope.user[0]._id);
            mainService.getScoresById($scope.user[0]._id)
            .then((response) => {
                $scope.data = response.data;
                console.log($scope.data);
                // $state.go("scores");
            });
        };


    // end of controller............
});
