const Issuecontroller = require('../controllers/issue.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    app.get('/api/issues/user', authenticate, Issuecontroller.getAllIssuesOfSignedInUser);
    app.post('/api/getAllIssueOfWorkspace',authenticate, Issuecontroller.getAllIssueOfWorkspace);
    app.post('/api/users/workspace/project/issue',authenticate, Issuecontroller.createIssue);
    app.patch('/issues/:issueId/changeStatus', Issuecontroller.changeIssueStatus);


}


