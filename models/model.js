const mongoose = require('mongoose')

const Model = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: { 
    type: String, 
    required: true,
    enum: ['alta', 'média', 'baixa'], 
  },
  status: { 
    type: String, 
    required: true,
    enum: ['fazer', 'fazendo', 'feito'], 
  },
  dueDay: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() }
})

const Task = mongoose.model('tasks', Model)

module.exports = Task;