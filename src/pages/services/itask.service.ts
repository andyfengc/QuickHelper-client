import { Task } from '../models/task.model';
import {Observable} from 'rxjs/Observable';

export interface ITaskService{
    getAllTasks(): Observable<Task[]>;
    getTasks(q : string): Observable<Task[]>;
}