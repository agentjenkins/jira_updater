# Jira update project
This small project can be used to bulk update Jira when jiras own bulk update does not allow for it.
We are using npm package "jira" to help with the Jira access.

For docs on how to write json for update,  see
[jira api docs](./node_modules/jira-connector/docs/jira-connector/1.11.0/index.html)

## Setup

### Install node
Download and install node.js from
https://nodejs.org/en/download/

### Download dependencies
in the project root Run `npm install`

### Credentials to JIRA
Before using you need to provide credentials and urls to access Jira.  
This is easiest done by copying the file `resources/propsTemplate.json` to a new file  `resources/props.json`
This is a plain json files where you can modify the values to match your credentials.

## Usage

### List
To list a number of given keys,
create a json file with the keys you wish to list

`node jiraUpdate.js --list --issues=../resources/testIssue.json`

### Update
To update a list of given keys,
create a json file with the keys you wish to update

`node jiraUpdate.js --update --issues=../resources/updateIssue.json`

### List Versions
List version for a specific project.
Optionally filtering on regxp for matching version name

`node jiraUpdate.js --listVersions --projectKey=DEL --versionRegExp=DDM`

### Release Versions
Will release version/s for a specific project.
Optionally filtering on regxp for matching version name
Use with care!!

`node jiraUpdate.js --listVersions --projectKey=DEL --versionRegExp=DDM`
