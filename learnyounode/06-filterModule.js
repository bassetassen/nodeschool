var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, filter, callback) {
    fs.readdir(dirPath, function(err, list) {
      if(err) {
        return callback(err);
      }

      var fileList = [];
      for (var i = 0; i < list.length; i++) {
        if(path.extname(list[i]) === "." + filter) {
          fileList.push(list[i]);
        }
      }

      return callback(null, fileList);
    });
};
