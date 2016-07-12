angular.module("mathApp")
.controller("mainCtrl", function($scope, $state, $cookies, mainService) {

    $scope.createUser = function(userInfo) {    //admin or user
        // console.log(userInfo);
        mainService.createUser(userInfo)
        .then((response) => {
            console.log(response.data);
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

    $scope.login = function() {     //admin or user
        // console.log($scope.loginUser);
        mainService.login($scope.loginUser)
        .then((response) => {
            console.log(response);
            if(response.data.length === 0) {
                alert("Login failed");
            }
            else{
                console.log(response);
                var user = response.data;
                $cookies.putObject("currentUser", user);
                $state.go("home");
            }
        });
    };

    $scope.saveScores = function(scores) {     //user
        console.log(scores);
        mainService.saveScores(scores)
        .then((response) => {
            console.log(response);
            return response;
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
