'use strict'

var list = function (jira, issues, argv) {
  for (var i = 0; i < issues.length; i++) {
    jira.issue.getIssue({issueKey: issues[i].key}, function (error, issue) {
      if (!error) {
        console.log('Status: ' + issue.fields.status.name)
        console.log(issue.key)
        console.log(issue.fields.assignee.displayName)
        console.log(issue.fields.summary)
        if (argv.verbose) {
          console.log(issue.fields);
        }
      } else {
        console.log(error)
      }
    })
  }
};

module.exports = list;
