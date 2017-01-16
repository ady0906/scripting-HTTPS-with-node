var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  var final = html.replace(/you/g, 'joo').replace(/er/g, '0r').replace(/ck/g, 'x').replace(/a/g, '4').replace(/e/g, '3').replace(/l/g, '1').replace(/o/g, '0');
  console.log(final.replace(/s/g, '5').replace(/t/g, '7'));
}

getHTML(requestOptions, print1337);
