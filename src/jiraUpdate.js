"use strict"

var fs = require('fs');

require('ssl-root-cas').inject();
var props = require('../resources/props.json')
var argv = require('minimist')(process.argv.slice(2))
var list = require('./ops/list.js')
var update = require('./ops/update.js')
var listVersions = require('./ops/listVersions.js')
var releaseVersions = require('./ops/releaseVersions.js')
var fileReader = require('./util/fileReader')
var JiraClient = require('jira-connector');

var jira = new JiraClient({
  host: props.url,
  protocol: props.protocol,
  port: props.port,
  basic_auth: {
    username: props.user,
    password: props.password
  },
  version: props.version
});

// Require file containing issue keys
function getIssues(argv) {
  if (!argv.issues) {
    console.log("--issues are required");
    throw exception;
  } else {
    return require(argv.issues);
  }
}

if (argv.list) {
  var issues = getIssues(argv)
  list(jira, issues, argv)
} else if (argv.update) {
  var updateJson = "" //fileReader.read(argv.updateJson);
  var issues = getIssues(argv)
  console.log(updateJson);
  update(jira, issues, updateJson);
} else if (argv.listVersions) {
  listVersions(jira, argv.projectKey, argv.versionRegExp, argv);
} else if (argv.releaseVersions) {
  releaseVersions(jira, argv.projectKey, argv.versionRegExp);
} else {
  console.log('Unknown command, valid commands are --list --update')
}
