'use strict'

var releaseVersion = function(versionClient, version) {

  var project = versionClient.editVersion({
    "versionId": version.id,
    "version": {
      "released": true,
      "releaseDate": (version.startDate ? addDays(version.startDate, 30) : null)
    }
  })
};

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

module.exports = releaseVersion;
