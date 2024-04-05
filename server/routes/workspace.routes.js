const Workspacecontroller = require('../controllers/workspace.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    
    app.get('/api/getAllWorkspaceOfUser',authenticate, Workspacecontroller.getAllWorkspaceOfUser);
    app.post('/api/users/workspace', authenticate, Workspacecontroller.saveworskapce);

    app.get('/api/users/workspace/issues',authenticate, Workspacecontroller.getAllIssuesWorkspace);

    app.post('/workspace/members', authenticate, Workspacecontroller.getAllMemberOfWorkspace);



  
    app.get('/api/getActiveWorkspaceOfUser',authenticate, Workspacecontroller.getActiveWorkspaceOfUser);
    app.put('/api/getActiveWorkspaceOfUser',authenticate, Workspacecontroller.updateWorkspaceSetting);
    app.delete('/api/getActiveWorkspaceOfUser',authenticate, Workspacecontroller.deleteWorkspaceSetting);
    // app.get('/api/getAllProjectOfUser', Workpsacecontroller.getAllOfUser);
   
}
