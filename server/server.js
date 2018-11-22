const path = require('path')
const http = require('http')
const express = require('express')
const routes = require('./routes/index.js')
const db = require('./data/db/connection.js');
const keys = require('./data/config/keys');
const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);
const {task} = require('./utils/crontask');
const cookieParser = require('cookie-parser');
// MIDDLEWARES
const cors = require('cors');
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')

task();
app.use(cookieParser());
const middlewares = [
  cors({credentials: true, origin: 'http://localhost:8080'}),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  passport.initialize(),
  passport.session(),
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: true
  })
];

app.use(passport.initialize());
app.use(passport.session());
require('./services/passport')(passport);

app.use((req, res, next) => {
  req.test = "Test";
  req.res = res;
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PROPFIND');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

app.use(middlewares)

app.get('/api/*', routes);
app.post('/api/*', routes);
app.put('/api/*', routes);
app.delete('/api/*', routes);

app.use('/static', express.static(path.join(__dirname, 'assets')));

app.use('/my-files', express.static(path.join(__dirname, 'my-files')));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


server.listen(PORT, () => {
  console.log('App running at http://localhost:8080')
});