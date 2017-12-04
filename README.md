# Jira update project
This small project can be used to bulk update Jira when jiras own bulk update does not allow for it.
We are using npm package "jira" to help with the Jira access.

For docs on how to write json for update,  see
[jira api docs](node_modules/jira/docs/jira.html)

## Setup
Before using you need to provide credentials and urls to access Jira.
This is easiest done by copying the file `propsTemplate.json` to a new file called `props.json`
This is a plain json files where you can modify the values to match your credentials.

## Usage

To update a list of given keys,
create a json file with the keys you wish to update

`node jiraUpdate.js --list --issues=../resources/testIssue.json`

`node jiraUpdate.js --update --issues=../resources/updateIssue.json`
