const User = require('../../Schemas/userSchema.js');
const Scores = require('../../Schemas/scoresSchema.js');
const mongoose = require('mongoose');
module.exports = {

    userLogin(req, res, next) {
        if (!req.session.user) {
            return res.status(401).json(err);
        }
        return res.status(200).json(result);
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
        User.find(function(err, result){
            if (err) {
                return res.status(500).json(err);
            }
                return res.status(200).json(result);
            });
    },

    getUsersById(req, res, next) {
        User.find({}, function(err, user){
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
            // User.Scores.push(result);
            return res.status(200).json(result);
        });
    },

    updateUser(req, res, next) {
        if (!req.params.id) {
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
