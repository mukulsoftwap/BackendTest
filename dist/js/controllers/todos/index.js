"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.getTaskById = exports.getAllTasks = void 0;
const task_1 = __importDefault(require("../../models/task"));
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.assignedTo) {
            const assignedUser = req.query.assignedTo;
            yield task_1.default.updateMany({}, { $set: { assignedTo: assignedUser } }, { multi: true });
        }
        const query = req.query.category ? { category: req.query.category } : {};
        const task = yield task_1.default.find(query);
        res.status(200).json({ task });
    }
    catch (error) {
        throw error;
    }
});
exports.getAllTasks = getAllTasks;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.default.findById(req.params.id);
        res.status(200).json({ task });
    }
    catch (error) {
        throw error;
    }
});
exports.getTaskById = getTaskById;
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const task = new task_1.default({
            title: body.title,
            description: body.description,
            dueDate: body.dueDate,
            assignedTo: body.assignedTo,
            category: body.category,
            status: body.status,
        });
        const newTask = yield task.save();
        res.status(201).json({ message: 'Task added', task: newTask });
    }
    catch (error) {
        throw error;
    }
});
exports.addTask = addTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTask = yield task_1.default.findByIdAndUpdate({ _id: id }, body);
        const allTasks = yield task_1.default.find();
        res.status(200).json({
            message: 'Task updated',
            todo: updateTask,
            todos: allTasks,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTask = yield task_1.default.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message: 'Task deleted',
            task: deletedTask
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTask = deleteTask;
