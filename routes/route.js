const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getTasks);

router.get('/:id', controller.taskById);

router.post('/submit', controller.taskSubmitted);

router.put('/edit/:id', controller.taskModified);

router.delete('/delete/:id', controller.taskDeleted);


module.exports = router;
