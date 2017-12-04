'use strict'

var update = function (jira, issues) {
  for (var i = 0; i < issues.length; i++) {
    console.log(issues[i].key)
    jira.updateIssue(issues[i].key, {
      'update': {
        'timetracking': [
          {
            'edit': {
              'originalEstimate': '8h'
            }
          }
        ]
      }
    }, function (error, issue) {
      console.log(issue)
      if (error) {
        console.log('error: ' + error)
      }
    })
  }
};

module.exports = update;
