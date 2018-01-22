'use strict'

var update = function(jira, issues) {
  for (var i = 0; i < issues.length; i++) {
    console.log(issues[i].key)
    jira.issue.editIssue({'issueKey': issues[i].key, 'issue':  {
      'update': {
        'timetracking': [{
          'edit': {
            'originalEstimate': '8h'
          }
        }]
      }}
    }, function(error, issue) {
      console.log('trying to update ' + issue)
      if (error) {
        console.log('error in update: ' + error)
      }
    })
  }
};

module.exports = update;
