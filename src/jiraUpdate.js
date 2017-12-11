"use strict"

var fs = require('fs');

var JiraApi = require('jira').JiraApi
var props = require('../resources/props.json')
var argv = require('minimist')(process.argv.slice(2))
var list = require('./ops/list.js')
var update = require('./ops/update.js')
var fileReader = require('./util/fileReader')
var jira = new JiraApi(props.protocol,
  props.url,
  props.port,
  props.user,
  props.password,
  props.apiVersion,
  props.verbose,
  props.strictSsl);

// Require file containing issue keys
var issues = require(argv.issues);

if (argv.list) {
  list(jira, issues)
} else if (argv.update) {

  var updateJson = ""//fileReader.read(argv.updateJson);
  console.log(updateJson);
  update(jira, issues, updateJson);
} else {
  console.log('Unknown command, valid commands are --list --update')
}
