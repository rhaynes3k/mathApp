angular.module("mathApp")
.controller("mainCtrl", function($scope, mainService) {

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

    $scope.login = function(userInfo) {     //admin or user
        console.log(userInfo);
        mainService.login(userInfo)
        .then((response) => {
            console.log(response);
            return response;
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
