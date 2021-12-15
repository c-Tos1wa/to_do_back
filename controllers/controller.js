const service = require('../services/service');

const getTasks = async (req, res) => {
  const tasks = await service.getAll()
  res.send(tasks)
};

const taskById = async(req, res) => {
  const id = req.params.id;
  const task = await service.getById(id);
  res.send(task)
}

const taskSubmitted = async(req, res) => {
  const data = req.body
  const dataSubmitted = await service.post(data)
  res.send(dataSubmitted)
}

const taskModified = async(req, res) => {
  const id = req.params.id;
  const data = req.body;
  const dataModified = await service.put(id, data);
  res.send(dataModified);
}

const taskDeleted = async (req,res) => {
  const id = req.params.id;
  const dataDeleted = await service.deleteById(id);
}

module.exports = {
  getTasks,
  taskById,
  taskSubmitted,
  taskModified,
  taskDeleted
}