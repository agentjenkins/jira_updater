'use strict'

var update = function(jira, issues) {
  for (var i = 0; i < issues.length; i++) {
    console.log(issues[i].key)
    debugger;
    jira.updateIssue(issues[i].key, {
          'update': {
            "fields": {
              "assignee": {
                "id": "blomma"
              }
            }
          }
        },
      function(error, issue) {
        console.log('trying to update ' + issue)
        if (error) {
          console.log('error in update: ' + error)
        }
      })
}
};

module.exports = update;
