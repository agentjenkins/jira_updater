JiraApi = require('jira').JiraApi;
var props = require('./resources/props.json');

var jira = new JiraApi(props.protocol, props.url, props.port, props.user, props.password, props.apiVersion, props.verbose, props.strictSsl);

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
