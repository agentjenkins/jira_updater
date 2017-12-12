'use strict'

var list = function (jira, issues) {
  for (var i = 0; i < issues.length; i++) {
    jira.issue.getIssue({issueKey: issues[i].key}, function (error, issue) {
      if (!error) {
        console.log('Status: ' + issue.fields.status.name)
        console.log(issue)
      } else {
        console.log(error)
      }
    })
  }
};

module.exports = list;
