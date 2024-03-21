const Projectcontroller = require('../controllers/project.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    app.get('/api/getAllProjectOfUser', Projectcontroller.getAllProjectOfUser);
}

