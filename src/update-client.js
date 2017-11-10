var JiraApi = require('jira-client');
// Initialize
var jira = new JiraApi({
  protocol: 'https',
  host: 'jira.corp.delaval.com',
  username: 'blomma',
  password: 'Boselur1#',
  apiVersion: '2',
  strictSSL: false
});

var issue = jira.findIssue('SUP-655');
console.log(issue);
