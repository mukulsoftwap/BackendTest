"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
// Get Calls
router.get('/tasks', todos_1.getAllTasks);
router.get('/task/:id', todos_1.getTaskById);
// Post Calls
router.post('/task', todos_1.addTask);
//Put Calls
router.put('/task/:id', todos_1.updateTask);
// Delete Calls
router.delete('/task/:id', todos_1.deleteTask);
exports.default = router;
