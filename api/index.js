const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomerrorHandler} = require('../middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://192.168.1.60:5500', 'http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}
app.use(cors());

app.get('/api', (req, res) => {
  res.send('hola mi server express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('hola soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomerrorHandler);
app.use(errorHandler);

app.listen(port,() => {
  console.log('listening on port ' + port);
});
