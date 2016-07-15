const User = require('../../Schemas/userSchema.js');
const Scores = require('../../Schemas/scoresSchema.js');
const mongoose = require('mongoose');
module.exports = {

    userLogin(req, res, next) {
        if (!req.body.user) {
            return res.status(401).json(err);
        }
        return res.status(200).json(result);
    },
    login(req, res, next) {
        console.log(req.body);
        User.find({username: req.body.username, password: req.body.password}).exec((err, result) =>{
            console.log("result line 21", result);

             return res.status(200).send(result);
        });
    },
    createUser(req, res, next) {
        new User(req.body).save((err, result) =>{
            if (err) {
            return res.status(500).json(err);
        }
            console.log(result);
            return res.status(200).json(result);
        });
    },
    getUsers(req, res, next) {
        User.find({})
        .populate('scores')
        .exec(function(err, result){

            if (err) {
                return res.status(500).json(err);
            }
                return res.status(200).json(result);
            });
    },

    getUsersById(req, res, next) {
        console.log("userId", req.body);
        User.findById({userId: _id})
        // .populate('Scores')
        .exec(function(err, user){
            if (err) {
                return res.status(500).json(err);
            }
                return res.status(200).json(result);
            });
    },

    getScores(req, res, next) {
        Scores.find({})
        .populate('user')
        .exec(
            function(err, result) {
            if (err) {
                return res.status(500).json(err);
            }
                return res.status(200).json(result);
            });
    },

    getScoresById(req, res, next) {
        console.log("line 57", req.params.id);
        Scores.find({"user": req.params.id})
        .populate('user')
        .exec((err, result) =>{
            if (err) {
                return res.status(500).json(err);
            }
                return res.status(200).json(result);
            });

    },

    saveScores(req, res, next) {
        new Scores(req.body).save((err, result) => {
            if (err) {
            return res.status(500).json(err);
        }
            // User.scores.find({}).push(result._id);
            console.log("Line 79", result._id);
            return res.status(200).json(result);
        });
    },

    updateUser(req, res, next) {
        if (!req.params.id) {
            console.log(req.params.id);
            return res.status(400).send('id query needed');
        }
        var query = {
            _id: mongojs.ObjectId(req.params.id)
        };
        Users.update(query, (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }else {
                return res.send(result);
            }
        });
    },







};
