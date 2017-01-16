module.exports = function getHTML(options, callback) {

  var https = require('https');

  var final = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      final += data;
    });

    response.on('end', function() {
      callback(final);
    });
  });
};
