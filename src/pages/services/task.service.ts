import {Component, OnInit, Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {ITaskService} from './itask.service';
import {Task} from '../models/task.model';
import {AppSettings} from '../utils/app-settings';

@Injectable()
export class TaskService implements ITaskService{
    constructor(private http : Http){
        
    }
    getAllTasks(): Observable<Task[]>{
        let url = AppSettings.getAllTasksUrl();
        var result = this.http.get(url)
        .map(res => res.json());
        return result;
    }

    getTasks(q : string): Observable<Task[]>{
        return null;
    }
}