const userCtrl = require('./controllers/userCtrl.js');
module.exports = app => {
    app.get("/api/user/userInfo", userCtrl.getUsers);
    app.get("/api/user/userById", userCtrl.getUsersById);
    app.post("/api/user/login", userCtrl.login);
    app.post("/api/user/userInfo", userCtrl.createUser);
    app.post("/api/user/scores", userCtrl.saveScores);
    app.get("/api/user/scores", userCtrl.getScores);
    app.get("/api/user/scoresById/:id", userCtrl.getScoresById);
    app.put("/api/user/userInfo/:id", userCtrl.updateUser);
};
