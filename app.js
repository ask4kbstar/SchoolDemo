var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const hostname = '0.0.0.0';

const route = require("./routes/route");

mongoose.connect('mongodb://localhost:27017/schoolDemo');

mongoose.connection.on('connected',()=>{
    console.log('connected to database @27017');
});

mongoose.connection.on('error',(err)=>{
    console.log('Error in Database connection:'+err);
});

const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.get('/',(req, res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server running at http://'+hostname,+port);
});