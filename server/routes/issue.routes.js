const Issuecontroller = require('../controllers/issue.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    
    app.post('/api/getAllIssueOfWorkspace',authenticate, Issuecontroller.getAllIssueOfWorkspace);
}


