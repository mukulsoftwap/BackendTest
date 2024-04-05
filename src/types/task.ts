import { Document } from 'mongoose'

export interface ITask extends Document {
    title: string
    description: string
    createdAt: number
    dueDate: number
    assignedTo: string
    category: string
    status: boolean
}