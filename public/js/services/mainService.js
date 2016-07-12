angular.module("mathApp")
    .service('mainService', function($http) {

        this.createUser = function(obj) {   //admin or user
            console.log(obj);
            return $http.post("/api/user/userInfo", obj);
        };

        this.getUsers = function() {    //admin
            return $http.get("/api/user/userInfo");
        };

        this.getUserById = function() {     //admin or user
            return $http.get("/api/user/userInfo", _id);
        };

        this.saveScores = function(scr, outOf) {  //user
            return $http.post("/api/user/scores", {
                numRight: scr,
                outOf: outOf
            });
        };

        this.getScores = function() {   //admin
            return $http.get("/api/user/scores");
        };

        this.getScoresById = function() {   //admin or user
            return $http.get("/api/user/scores", _id);
        };

        this.updateUsers = function() {    //admin
            return $http.delete("/api/user/userInfo", _id);
        };

        this.login = function(userObj) {
            return $http({
                method: 'POST',
                url: '/api/user/login',
                data: {username: userObj.username, password: userObj.password}
            })
            .then(function (res){
                console.log("hello");
                return res;

            });
        };

//end of API calls...



        this.getNumEqutn = function(lvl) {
            var numT;
            var l;
            for (var i = 0; i < 10; i++) {
                if (lvl === 'Beginner') {
                    l = 10;
                } else if (lvl === 'Intermediate') {
                    l = 100;
                } else if (lvl === 'Genius') {
                    l = 10000;
                }
                numT = (Math.floor((Math.random() * l) + 1));
                return numT;
            }
        };

        this.yea = function(bot) {
            for (var e = 0; e < 10; e++) {
                if (bot !== "Random") {
                    yea = bot;
                }
                if (bot == "Random") {
                    bot = (Math.floor((Math.random() * 25) + 1));
                    yea = bot;
                }
            }
            return bot;
        };

        this.getAns = function(top, bot, op) {
            if (op === "+") {
                return top + bot;
            } else if (op === "x") {
                return top * bot;
            } else if (op === "-") {
                return top - bot;
            } else if (op === "\u00F7") {
                return Math.round((top / bot) * 100) / 100;
            }
        };

        this.cmprAns = function(num, sum) {
            if (num == sum) {
                // console.log(num);
                // console.log(sum);
                sweetAlert("CORRECT!!! Good job!", "You clicked the button!", "success");
                return "Correct!";
            } else {
                if (num.match(/[a-z]/i)) {
                    sweetAlert("Oops...", "Letters detected in answer!", "error");
                }
                sweetAlert("Uh-Oh...Wrong Answer...");
                return "Uh-Oh...Wrong Answer...";
            }
        };







        //end of service
    });
