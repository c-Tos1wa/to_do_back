const model = require('../models/model');

const getAll = async () => { 
  return await model.find()
};

const getById = async (id) => {
  return await model.findById(id)
};

const post = async(data) => {
  return await model.create(data);
}

const put = async(id, data) => {
  return await model.findByIdAndUpdate(id, data)
}

const deleteById = async (id) => {
  return await model.findByIdAndDelete(id)
}

module.exports = {
  getAll,
  getById,
  post,
  put,
  deleteById
}