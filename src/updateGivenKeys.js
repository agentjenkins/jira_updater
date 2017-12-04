JiraApi = require('jira').JiraApi;
var props = require('./resources/props.json');

var jira = new JiraApi(props.protocol, props.url, props.port, props.user, props.password, props.apiVersion, props.verbose, props.strictSsl)

var issues = require('./resources/reportItems1.json')

for (i = 0; i < issues.length; i++) {
console.log(issues[i].key);
jira.updateIssue(issues[i].key, {
    "update": {
        "timetracking": [
            {
                "edit": {
                    "originalEstimate": "8h"
                }
            }
        ]
    }
}, function(error, issue) {
    console.log(issue);
    if(error) {
      console.log("error: " + error);
    }
  });
}
