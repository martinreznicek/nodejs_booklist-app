var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + 'foreground-app'));

app.set('view engine', 'ejs');

//connection to the DB
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection failed');
    });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Client-Name, X-Client-Version");
    next();
    });

//this will add the endpoint for the setupContoller and call the function(app)
setupController(app);
apiController(app);

app.listen(port);