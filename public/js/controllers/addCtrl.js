angular.module("mathApp")
    .controller('addCtrl', function($scope, $cookies, $state, mainService) {

        $scope.currentDate = new Date();

        $scope.user = $cookies.getObject("currentUser");

        var numT, numB;
        var addAns = [];
        $scope.cntr = 0;
        $scope.rgt = 0;
        $scope.wrg = 0;


$scope.last = function() {
            if ($scope.cntr >= 2) {
                $scope.prcnt = Math.round((($scope.rgt / $scope.cntr) * 100) * 100) / 100;
                // $scope.saveScores();
                return true;

            }
};
        $scope.level = ["Beginner", "Intermediate", "Genius"];

        $scope.yea = function() {
            $scope.yeah = mainService.yea($scope.numB);
        };


        $scope.getNumEqutn = function() {
            $scope.numT = mainService.getNumEqutn($scope.levl);
            $scope.yea();
            $scope.opr = "+";
            $scope.started = function() {
                return true;
            };
            console.log($scope.numT);
            console.log($scope.opr);
            console.log($scope.numB);
            $scope.shw = function() {
                return true;
            };
        };

        $scope.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Random"];

        $scope.getAns = function() {
            $scope.tot = mainService.getAns($scope.numT, $scope.yeah, $scope.opr);

            console.log($scope.tot);
        };


        $scope.cmprAns = function() {
            $scope.corrAns = mainService.cmprAns($scope.ans, $scope.tot);
            if ($scope.corrAns === "Correct!") {
                console.log($scope.ans);
                console.log($scope.corrAns);
                $scope.rgt += 1;
                $scope.ans = "";
                $scope.cntr = ($scope.rgt + $scope.wrg);
                $scope.getNumEqutn();


                // console.log($scope.rgt);

            } else {
                $scope.wrg += 1;
                $scope.ans = "";
                $scope.cntr = ($scope.rgt + $scope.wrg);
                $scope.getNumEqutn();


                // console.log($scope.wrg);

            }


            console.log($scope.cntr);
            console.log($scope.rgt);
            console.log($scope.wrg);
            // console.log($scope.tot);
        };


        // $scope.scores = function() {
        //     console.log($cookies.getObject("currentUser"));
        //     console.log($scope.user[0]._id);
        //     mainService.getScoresById($scope.user[0]._id)
        //     .then((response) => {
        //         $scope.data = response.data;
        //         console.log(response.data[0].quizType);
        //         // $state.go("scores");
        //     });
        // };

        $scope.saveScores = function() {          //user
            console.log($scope.opr, $scope.rgt, $scope.cntr, $scope.user[0]._id);
            mainService.saveScores($scope.opr, $scope.rgt, $scope.cntr, $scope.user[0]._id)
                .then((response) => {
                    console.log(response);
                    $state.go("home");

                });
        };




        // end of controller
    });
