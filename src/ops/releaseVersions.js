'use strict'

var releaseVersion = require('../ops/releaseVersion.js')

var releaseVersions = function(jira, projectKey, versionRegExp) {
  var project = jira.project.getProject({
    'projectIdOrKey': projectKey
  }, function(error, project, hits) {
    console.log("Releasing versions in " + projectKey + " With filter on " + versionRegExp);
    if (!error) {
      for (var i = 0; i < project.versions.length; i++) {
        var version = project.versions[i];
        var regExp = new RegExp(versionRegExp);
        if (regExp.test(version.name)) {
          hits++
          releaseVersion(jira.version, version);
        }
      }
    } else {
      console.log(error.statusCode)
    }
  })
};

module.exports = releaseVersions;
