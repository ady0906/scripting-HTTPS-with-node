var https = require('https');

function getHTML(options, callback) {

  var final = '';

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      final += data;
    });

    response.on('end', function() {
      callback(final);
    });
  });
};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
