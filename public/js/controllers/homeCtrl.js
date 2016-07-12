angular.module("mathApp")
    .controller('homeCtrl', function($scope, $state, $cookies, mainService) {

        $scope.user = $cookies.getObject("currentUser");

        if (!$scope.user) {
            $state.go('login');
        }

        console.log("currentuser", $scope.user);

        $scope.isUser = function() {
            return true;
        };
        $scope.isUser();

        $scope.logout = function() {
            $cookies.remove("currentUser");
            $state.go('login');
        };

        //end of controller.......
    });
