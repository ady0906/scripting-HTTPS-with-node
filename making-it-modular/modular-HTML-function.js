var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: process.argv[2],
    path: process.argv[3]
  }

  // Input those arguments in the terminal, using the process.argv method
  // var requestOptions = {
  // host: 'sytantris.github.io',
  // path: '/http-examples/step3.html'
  // };

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
