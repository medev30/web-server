var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;


var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function(req, res) {
    res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));  // will use default index.thml in 'public' folder

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT );
});
