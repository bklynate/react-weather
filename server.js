var express = require('express');

// create our application
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(request, response, next){
  if (request.headers['x-forwarded-proto'] === 'http'){
    response.redirect('http://'+ request.hostname + request.url);
  } else {
    next();
  }
});

app.use(express.static("public"));

app.listen(PORT, function(){
  console.log("Nate told me to listen on " + PORT);
});
