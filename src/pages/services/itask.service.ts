import { Task } from '../models/task.model';

export interface ITaskService{
    getAllTasks(): Task[];
    getTasks(q : string): Task[];
}