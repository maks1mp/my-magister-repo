/**
 * Created by HP-ProBook on 22.01.2017.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const loginHandler = require('./node/login');
const coursesHandler = require('./node/courses');

const PORT = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use("/css",  express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/libs", express.static(__dirname + '/libs'));
app.use("/app", express.static(__dirname + '/app'));
app.use("/img",  express.static(__dirname + '/img'));
app.use("/fonts",  express.static(__dirname + '/fonts'));

app.get('/', (request, response)=>{
    response.sendfile(__dirname + '/index.html');
});

app.post('/adminlogin', loginHandler.init);

app.get('/get_courses', coursesHandler.get);
app.post('/create_course', coursesHandler.create);


app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});