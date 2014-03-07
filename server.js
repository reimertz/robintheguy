// buildstrap demo server.

var consolidate = require('consolidate'),
    express = require('express'),
    swig = require('swig'),
    DB = require('./database/mongoose'),
    Q = require("q"),  
    app = express(),
    port = process.env.PORT || 3000;

app.use('/css', express.static(__dirname + '/build/css'));
app.use('/js', express.static(__dirname + '/build/js'));
app.use('/img', express.static(__dirname + '/src/img'));
app.use('/fonts', express.static(__dirname + '/src/fonts'));

app.use(express.favicon(__dirname + '/src/img/favicon.png'));
app.use(express.bodyParser());

app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/build/html');
swig.setDefaults({ cache: false });
swig.precompile('/build/html','/build/html');

app.get('/', function (req, res) {
    res.render('home-view/home-view');
});

app.listen(port);

console.log('Running buildstrap demo server on port ' + port);		




