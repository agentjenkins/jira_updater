JiraApi = require('jira').JiraApi;

var jira = new JiraApi('https', 'jira.corp.delaval.com', '443', 'blomma', 'Boselur1#', '2', true, false);

var issues = require('./resources/issues.json')

for (i = 0; i < issues.length; i++) {
console.log(issues[i].key);
jira.updateIssue(issues[i].key, {
    "update": {
        "timetracking": [
            {
                "edit": {
                    "originalEstimate": "4h"
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
