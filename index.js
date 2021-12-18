const express = require('express');
const cors = require('cors');
const Conn = require('./connection/connect')
const routes = require('./routes/route');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/', routes)

Conn();

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})