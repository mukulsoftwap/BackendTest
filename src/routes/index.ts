import { Router } from 'express'
import { getAllTasks, getTaskById, addTask, updateTask, deleteTask } from '../controllers/todos'
 
const router: Router = Router()

// Get Calls

router.get('/tasks', getAllTasks)
router.get('/task/:id', getTaskById)

// Post Calls

router.post('/task', addTask)

//Put Calls

router.put('/task/:id', updateTask)

// Delete Calls

router.delete('/task/:id', deleteTask)

export default router
