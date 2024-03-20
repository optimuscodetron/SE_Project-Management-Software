const UserController = require('../controllers/user.controller');

const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    app.post('/api/users', UserController.create1);
    app.get('/api/users', UserController.findAll);
    app.post('/api/users/login', UserController.login);
    app.post('/api/users/email', UserController.userOtpSend);
    app.post('/api/users/otp', UserController.userLogin);
    app.post('/api/users/newpassword', UserController.changeinfo);
    app.post('/api/users/workspace', UserController.saveworskapce);



    app.delete('/api/users/:id', authenticate , UserController.delete);
    app.put('/api/users/:id', authenticate, UserController.update);
    app.get('/api/users/:id', authenticate, UserController.findById);
}