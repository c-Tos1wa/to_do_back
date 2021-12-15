const mongoose = require('mongoose');

const connection = () => {
  mongoose.connect('mongodb://localhost:27017/toDoList', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Banco de dados MongoDB conectado')
  }).catch((error) => {
    console.log(`Banco não conectado, ${error}`)
  })  
}

module.exports = connection;
