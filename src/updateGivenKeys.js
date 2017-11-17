JiraApi = require('jira').JiraApi;
var props = require('./resources/props.json');

var jira = new JiraApi('https', 'jira.corp.delaval.com', '443', 'blomma', 'Boselur1#', '2', true, false);

var issues = require('./resources/bugs0minutes.json')

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
