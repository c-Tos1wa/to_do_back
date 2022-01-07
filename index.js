if(process.env.NODE_ENV != 'production'){
  require('dotenv').config();
}



const express = require('express');
const cors = require('cors');
const Conn = require('./connection/connect')
const routes = require('./routes/route');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/', routes)

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

app.listen(process.env.PORT | port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})