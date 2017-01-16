var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var final = '';

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('error', function() {
      console.log("Having a hard time printing this chunk");
    });
    response.on('data', function(data) {
      console.log('Chunk received:', final += data);
    });
    response.on('end',function() {
      console.log('All chunks received and printed out');
    });
  });
  return final;
};

getAndPrintHTML();
