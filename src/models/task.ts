import { ITask } from '../types/task';
import { model, Schema } from 'mongoose'

const taskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    dueDate: {
        type: Number,
        required: true
    },

    assignedTo: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        required: true
    }

}, { timestamps: true })


export default model<ITask>('Task', taskSchema)