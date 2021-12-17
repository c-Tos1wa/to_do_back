const service = require('../services/service');
const mongoose = require('mongoose')

const getTasks = async (req, res) => {
  const tasks = await service.getAll()

  if (tasks.length === 0){
    res.send({ message: "Não há tarefas nesta lista" })
  } else{
    res.send(tasks)
  }
};

const taskById = async(req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).send({ message: 'Identificador inválido, por favor verifique as informações!' })
    return
  }
  const task = await service.getById(id);
  if(!task) {
    res.status(404).send({ message: 'Tarefa não encontrada' });
  }
  res.send(task)
}

const taskSubmitted = async(req, res) => {
  const data = req.body
  try{
    const dataSubmitted = await service.post(data)
    res.send({ message: 'Tarfea criada com sucesso!' })
  } catch(err){
    res.status(400).send("Preencha os campos necessários!")
  }
  
}

const taskModified = async(req, res) => {
  const id = req.params.id;
  const data = req.body;

  try{
    const dataModified = await service.put(id, data);
    res.send({ message: 'A alteração foi feita com sucesso!' })
  } catch(error){
    res.status(500).send(`O erro ${error} ocorreu no servidor. Não foi possível fazer a alteração`);
  }
}

const taskDeleted = async (req, res) => {
  const id = req.params.id;

  try{
    const dataDeleted = await service.deleteById(id);
    res.send({ message: `A tarefa ${dataDeleted.title} foi deletada com sucesso!` })
  } catch(err){
    res.status(500).send({ message: `Não foi possível apagar esta tarefa devido ao erro ${err}` })
  }
}

module.exports = {
  getTasks,
  taskById,
  taskSubmitted,
  taskModified,
  taskDeleted
}