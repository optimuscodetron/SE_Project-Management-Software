const Projectcontroller = require('../controllers/project.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    
    app.post('/api/getAllProjectOfUser',authenticate, Projectcontroller.getAllProjectOfUser);
    app.post('/api/createProject',authenticate, Projectcontroller.createProject);
    app.get('/project/allIssues/:projectId',authenticate, Projectcontroller.allIssues);
    app.post('/addMemberToProject',authenticate, Projectcontroller.addMemberToProject);
    app.post('/removeMemberFromProject',authenticate, Projectcontroller.removeMemberFromProject);

    app.post('/api/users/workspace/project/members',authenticate,Projectcontroller.fetchallmembers);

    app.post('/api/projectInfo',authenticate, Projectcontroller.projectInfo);
    app.put('/api/projectUpdateInfo',authenticate, Projectcontroller.projectUpdateInfo);

    app.post('/api/createCycle',authenticate,Projectcontroller.createCycle);
    
}

