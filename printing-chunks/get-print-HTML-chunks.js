var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('error', function() {
      console.log("Having a hard time printing this chunk");
    });
    response.on('data', function(data) {
      console.log('Chunk received:', data + '\n');
    });
    response.on('end',function() {
      console.log('All chunks received and printed out');
    });
  });
};

getAndPrintHTMLChunks();
