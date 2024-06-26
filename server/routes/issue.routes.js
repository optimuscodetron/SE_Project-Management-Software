const Issuecontroller = require('../controllers/issue.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    app.get('/api/issues/user', authenticate, Issuecontroller.getAllIssuesOfSignedInUser);
    app.post('/api/getAllIssueOfWorkspace',authenticate, Issuecontroller.getAllIssueOfWorkspace);
    app.post('/api/users/workspace/project/issue',authenticate, Issuecontroller.createIssue);
    app.patch('/issues/:issueId/changeStatus', Issuecontroller.changeIssueStatus);

    /*piyush*/
    app.get('/api/workspace/issue/description', authenticate, Issuecontroller.getIssue)
    app.put('/api/workspace/issue/updateDescription', authenticate, Issuecontroller.updateIssueDescription);
    //piyush
    app.get('/api/workspace/issue/details',authenticate, Issuecontroller.assigneDetails);
    app.delete('/api/workspace/issue/details',authenticate, Issuecontroller.deleteIssue);
    //piyush
    app.post('/api/workspace/issue/comment', authenticate, Issuecontroller.addComment);
    app.get('/api/workspace/issue/comments', authenticate, Issuecontroller.getComments);

}


