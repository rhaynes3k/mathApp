const userCtrl = require('./controllers/userCtrl.js');
module.exports = app => {
    app.get("/api/user/userInfo", userCtrl.getUsers);
    app.get("/api/user/userInfo", userCtrl.getUsersById);
    app.post("/api/user/login", userCtrl.login);
    app.post("/api/user/userInfo", userCtrl.createUser);
    app.post("/api/user/scores", userCtrl.saveScores);
    app.put("/api/user/userInfo/:id", userCtrl.updateUser);
};
