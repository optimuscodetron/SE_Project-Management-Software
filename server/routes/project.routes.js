const Projectcontroller = require('../controllers/project.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    
    app.post('/api/getAllProjectOfUser',authenticate, Projectcontroller.getAllProjectOfUser);
}

