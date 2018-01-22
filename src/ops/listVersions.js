'use strict'

var listVersions = function(jira, projectKey) {

  var project = jira.project.getProject({
    'projectIdOrKey': projectKey
  }, function(error, project) {
    console.log(projectKey);
    if (!error) {
      console.log(project)
      for (var i = 0; i < project.versions.length; i++) {
        var version = project.versions[i];
        if (version.name.startsWith('DDM')) {
          console.log(version.name + ", " + (version.released ? version.releaseDate : "unreleased"));
        }
      }
    } else {
      console.log(error)
    }
  })
};


module.exports = listVersions;
