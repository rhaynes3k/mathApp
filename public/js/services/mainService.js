angular.module("mathApp")
    .service('mainService', function($http) {

        this.createUser = function(obj) {   //admin or user
            console.log(obj);
            return $http.post("/api/user/userInfo", obj);
        };

        this.getUsers = function() {    //admin
            return $http.get("/api/user/userInfo");
        };

        this.getUserById = function(id) {     //admin or user
            console.log(id);
            return $http.get("/api/user/userInfo", {userId: id});
        };

        this.saveScores = function(op, scr, outOf, userId) {  //user
            console.log(op, scr, outOf, userId);
            return $http.post("/api/user/scores", {
                quizType: op,
                numRight: scr,
                outOf: outOf,
                user: userId
            });
        };

        this.getScores = function() {   //admin
            return $http.get("/api/user/scores");
        };

        this.getScoresById = function(id) {   //admin or user
            console.log(id);
            return $http.get("/api/user/scoresById/"+ id);
        };

        this.updateUsers = function() {    //admin
            return $http.delete("/api/user/userInfo", _id);
        };

        this.login = function(userObj, date) {
            console.log(userObj, date);
            return $http({
                method: 'POST',
                url: '/api/user/login',
                data: {username: userObj.username, password: userObj.password, currentDate: userObj.date}
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
                sweetAlert({
                    title: "Correct!!!",
                    timer: 1000,
                    showConfirmButton: false
                });
                return "Correct!";
            } else {
                if (num.match(/[a-z]/i)) {
                    sweetAlert({
                        title: "Oops..., Letters detected in answer!",
                        timer: 1000,
                        showConfirmButton: false
                    });
                }
                sweetAlert({
                    title: "Uh-Oh...Wrong Answer...",
                    timer: 1000,
                    showConfirmButton: false
                });
                return "Uh-Oh...Wrong Answer...";
            }
        };






        //end of service
    });
