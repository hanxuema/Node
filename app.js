var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');


//router
app.get('/', function(req, res){
    res.render('index');
});

app.get('/books', function(req, res){
    res.send('hello books');
});

app.listen(5000, function (err) {
    console.log('running server on port ' + port);

});