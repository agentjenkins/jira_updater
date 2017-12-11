"use strict"

var fs = require('fs');

var fileReader = {
  read: function(filename) {
    return fs.readFileSync(filename, 'utf-8');
  }
}


module.exports = fileReader;
