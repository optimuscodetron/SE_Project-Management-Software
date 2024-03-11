const Workpsacecontroller = require('../controllers/workspace.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    
    app.get('/api/getAllWorkspaceOfUser',authenticate, Workpsacecontroller.getAllWorkspaceOfUser);
    // app.get('/api/getAllProjectOfUser', Workpsacecontroller.getAllOfUser);
   
}