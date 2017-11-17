JiraApi = require('jira').JiraApi;
var props = require('./resources/props.json');
//var jira = new JiraApi({protocol: 'https',
//                        host: 'jira.corp.delaval.com',
//                        port: '443',
//                        username: 'blomma',
//                        password: 'Boselur1#',
//                        apiVersion: '2',
//                        strictSSL: true,
//                        verbose: true});

var jira = new JiraApi('https', 'jira.corp.delaval.com', '443', 'blomma', 'Boselur1#', '2', false);

var issues = require('./resources/testIssue.json')

for (i = 0; i < issues.length; i++) {

jira.findIssue(issues[i].key, function(error, issue) {
if (!error) {
  console.log('Status: ' + issue.fields.status.name);
  console.log(issue);
} else {
  console.log(error);
}
});
}
