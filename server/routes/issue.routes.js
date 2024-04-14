const Issuecontroller = require('../controllers/issue.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    
    app.post('/api/getAllIssueOfWorkspace',authenticate, Issuecontroller.getAllIssueOfWorkspace);
    app.post('/api/users/workspace/project/issue',authenticate, Issuecontroller.createIssue);



    app.get('/api/workspace/issue/description', authenticate, Issuecontroller.getIssue);
}


