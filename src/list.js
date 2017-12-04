JiraApi = require('jira').JiraApi
var props = require('./resources/props.json')
var argv = require('minimist')(process.argv.slice(2));

var jira = new JiraApi(props.protocol, props.url, props.port, props.user, props.password, props.apiVersion, props.verbose, props.strictSsl)

console.dir(argv);

// Require file containing issue keys
var issues = require(argv.issues);


for (i = 0; i < issues.length; i++) {
  jira.findIssue(issues[i].key, function (error, issue) {
    if (!error) {
      console.log('Status: ' + issue.fields.status.name)
      console.log(issue)
    } else {
      console.log(error)
    }
  })
}
