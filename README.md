# Jira update project
This small project can be used to bulk update Jira when jiras own bulk update does not allow for it.
We are using npm package "jira" to help with the Jira access.

For docs on how to write json for update,  see
[jira api docs](node_modules/jira/docs/jira.html)

## Usage

To update a list of given keys,
create a json file with the keys you wish to update

`node jiraUpdate.js --list --issues=../resources/testIssue.json`

`node jiraUpdate.js --update --issues=../resources/updateIssue.json`
