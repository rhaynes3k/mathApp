angular.module("mathApp")
    .controller('multiplyCtrl', function($scope, $cookies, $state, mainService) {

        $scope.currentDate = new Date();

        $scope.user = $cookies.getObject("currentUser");

        var numT, numB;
        $scope.cntr = 0;
        $scope.rgt = 0;
        $scope.wrg = 0;


        $scope.last = function() {
            if ($scope.cntr >= 2) {
                $scope.prcnt = Math.round((($scope.rgt / 2) * 100) * 100) / 100;
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
            $scope.opr = "x";
            $scope.started = function() {
                return true;
            };

            console.log($scope.numT);
            console.log($scope.opr);
            console.log($scope.numB);
            $scope.shw = function () {
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
                    $scope.ans = "";
                    $scope.getNumEqutn();
                    $scope.rgt += 1;

                    // console.log($scope.rgt);

                } else {
                    $scope.ans = "";
                    $scope.getNumEqutn();
                    $scope.wrg += 1;

                    // console.log($scope.wrg);

                }
                $scope.cntr =  $scope.rgt + $scope.wrg;

            // console.log($scope.ans);
            console.log($scope.cntr);
            console.log($scope.rgt);
            console.log($scope.wrg);
            // console.log($scope.tot);
        };

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
