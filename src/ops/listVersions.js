'use strict'

var listVersions = function(jira, projectKey, versionRegExp, argv) {

  var project = jira.project.getProject({
    'projectIdOrKey': projectKey
  }, function(error, project) {
    console.log(projectKey);
    if (!error) {
      //console.log(project)
      for (var i = 0; i < project.versions.length; i++) {
        var version = project.versions[i];
        var regExp = new RegExp(versionRegExp);
        if (regExp.test(version.name)) {
          if (argv.verbose) {
            console.log(version)
          } else {
            console.log(version.name + ", " + (version.released ? "released" : "unreleased"));
          }
        }
      }
    } else {
      console.log(error)
    }
  })
};

module.exports = listVersions;
