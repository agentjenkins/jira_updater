"use strict"

var fs = require('fs');

require('ssl-root-cas').inject();
var props = require('../resources/props.json')
var argv = require('minimist')(process.argv.slice(2))
var list = require('./ops/list.js')
var update = require('./ops/update.js')
var fileReader = require('./util/fileReader')
var JiraClient = require('jira-connector');

  var jira = new JiraClient( {
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
var issues = require(argv.issues);

if (argv.list) {
  list(jira, issues, argv)
} else if (argv.update) {

  var updateJson = ""//fileReader.read(argv.updateJson);
  console.log(updateJson);
  update(jira, issues, updateJson);
} else {
  console.log('Unknown command, valid commands are --list --update')
}
