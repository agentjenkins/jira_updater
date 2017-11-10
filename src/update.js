JiraApi = require('jira').JiraApi;

var jira = new JiraApi('https', 'jira.corp.delaval.com', '443', 'blomma', 'Boselur1#', '2', true, false);

var issues = require('./resources/issues.json')

console.log(issues);
for (i = 0; i < issues.length; i++) {

jira.findIssue(issues[i].key, function(error, issue) {
    console.log(error);
    console.log(issue);
    console.log('Status: ' + issue.fields.status.name);
});
}
