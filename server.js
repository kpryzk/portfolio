'use strict';

let express = require('express');
let app = express();
// const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('./index.html', {root:'./public'});
})

app.listen(PORT, function() {
  console.log(`Listening on port: "${PORT}"`);
});
