import { Response, Request } from 'express'
import { ITask } from '../../types/task'
import Task from '../../models/task'

const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        if(req.query.assignedTo){
            const assignedUser = req.query.assignedTo as string;
            await Task.updateMany({}, {$set : {assignedTo : assignedUser}}, {multi:true})
        }
        const query:any = req.query.category ? {category : req.query.category} : {};
        const task: ITask[] = await Task.find(query)
        res.status(200).json({ task })
    } catch (error) {
        throw error
    }
}

const getTaskById = async (req: Request, res: Response): Promise<void> => {
    try {
        const task: ITask | null = await Task.findById(
            req.params.id
        )
        res.status(200).json({ task })
    } catch (error) {
        throw error
    }
}

const addTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITask, 'title' | 'description' | 'dueDate' | 'assignedTo' | 'category' | 'status'>
        const task: ITask = new Task({
            title: body.title,
            description: body.description,
            dueDate: body.dueDate,
            assignedTo: body.assignedTo,
            category: body.category,
            status: body.status,
        }) 

        const newTask: ITask = await task.save()

        res.status(201).json({ message: 'Task added', task: newTask })
    } catch (error) {
        throw error
    }
}

const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTask: ITask | null = await Task.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allTasks: ITask[] = await Task.find()
        res.status(200).json({
            message: 'Task updated',
            todo: updateTask,
            todos: allTasks,
        })
    } catch (error) {
        throw error
    }
}

const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTask: ITask | null = await Task.findByIdAndRemove(
            req.params.id
        )
        res.status(200).json({
            message: 'Task deleted',
            task: deletedTask
        })
    } catch (error) {
        throw error
    }
}

export { getAllTasks, getTaskById, addTask, updateTask, deleteTask }
