angular.module("mathApp")
.controller("mainCtrl", function($scope, $state, $cookies, mainService) {

    $scope.currentDate = new Date();

    $scope.user = $cookies.getObject("currentUser");

    $scope.createUser = function(userInfo) {    //admin or user
        // console.log(userInfo);
        mainService.createUser(userInfo)
        .then((response) => {
            console.log(response.data);
            $state.go("home");
        });
    };


    // $scope.getUsers = function() {   //admin
    //     console.log();
    //     mainService.getUsers()
    //     .then((response) => {
    //         console.log(response);
    //     });
    // };

    $scope.getUserById = function(userInfo) {   //admin
        console.log(userInfo);
        mainService.getUserById(userInfo)
        .then((response) => {
            console.log(response);
        });
    };

    $scope.currentDate = new Date();

    $scope.login = function() {     //admin or user
        console.log($scope.loginUser);
        mainService.login($scope.loginUser, $scope.currentDate)
        .then((response) => {
            console.log(response);
            console.log(new Date());
            if(response.data.length === 0) {
                alert("Login failed");
            }
            else{
                console.log(response);
                var user = response.data;
                $cookies.putObject("currentUser", user);
                $cookies.putObject("date", new Date());
                console.log($cookies);
                $state.go("home");
            }
        });
    };

    $scope.saveScores = function() {          //user
        console.log($scope.opr, $scope.rgt, $scope.cntr, $scope.user[0]._id);
        mainService.saveScores($scope.opr, $scope.rgt, $scope.cntr, $scope.user[0]._id)
            .then((response) => {
                console.log(response);
                $state.go("home");

            });
    };

    $scope.getScores = function(userInfo) {    //admin
        console.log(userInfo);
        mainService.login(userInfo)
        .then((response) => {
            console.log(response);
            return response;
        });
    };

    $scope.getScoresById = function(userInfo) {     //admin or user
        console.log(userInfo);
        mainService.login(userInfo)
        .then((response) => {
            console.log(response);
            return response;
        });
    };





    //end of controller
});
