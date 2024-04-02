const Workspacecontroller = require('../controllers/workspace.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    
    app.get('/api/getAllWorkspaceOfUser',authenticate, Workspacecontroller.getAllWorkspaceOfUser);
    app.post('/api/users/workspace', authenticate, Workspacecontroller.saveworskapce);

    // app.get('/api/getAllProjectOfUser', Workpsacecontroller.getAllOfUser);
    app.get('/api/getActiveWorkspaceOfUser',authenticate, Workpsacecontroller.getActiveWorkspaceOfUser);
    app.put('/api/getActiveWorkspaceOfUser',authenticate, Workpsacecontroller.updateWorkspaceSetting);
    app.delete('/api/getActiveWorkspaceOfUser',authenticate, Workpsacecontroller.deleteWorkspaceSetting);
}
