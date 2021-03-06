import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { ITaskService } from './ITask.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class DummyTaskService implements ITaskService {
    tasks = [{
        "id": 1,
        "authorId": "u1",
        "nickname": "机器猫",
        "avatar": "http://lorempixel.com/100/100/nature/1/",
        "title": "请求扫雪",
        "content": "20米\n车库门前到人行道",
        "createdTime": new Date(),
        "startTime": new Date(),
        "endTime": new Date(),
        "price": 20,
        "address": "912 panarama hills close n/w"
    }, {
        "id": 2,
        "authorId": "u2",
        "nickname": "小鱼儿",
        "avatar": "http://lorempixel.com/100/100/nature/2/",
        "title": "打扫卫生工作",
        "content": "厨房, 饭厅，卫生间",
        "createdTime": new Date(),
        "startTime": new Date(),
        "endTime": new Date(),
        "price": 20,
        "address": "15-1720 canadian road"
    }, {
        "id": 3,
        "authorId": "u3",
        "nickname": "龙的传人",
        "avatar": "http://lorempixel.com/100/100/nature/3/",
        "title": "订外卖",
        "content": "订4份成人餐，2份儿童餐",
        "createdTime": new Date(),
        "startTime": new Date(),
        "endTime": new Date(),
        "price": null,
        "address": "912 panarama hills close n/w"
    }, {
        "id": 4,
        "authorId": "u4",
        "nickname": "Tony",
        "avatar": "http://lorempixel.com/100/100/nature/4/",
        "title": "找看护",
        "content": "帮家里老人找一位护工，刚做完手术，每天6个小时，周一到周五",
        "createdTime": new Date(),
        "startTime": new Date(),
        "endTime": new Date(),
        "price": 25,
        "address": "#1405, 705 cherry blvd."
    }, {
        "id": 5,
        "authorId": "u5",
        "nickname": "妞妞妈妈",
        "avatar": "http://lorempixel.com/100/100/nature/5/",
        "title": "请求接送孩子",
        "content": "5岁孩子，周一到周五，从家到学校",
        "createdTime": new Date(),
        "startTime": new Date(),
        "endTime": new Date(),
        "price": 20,
        "address": "20 hunterhore cres no"
    }];

    getAllTasks(): Observable<Task[]> {
        return Observable.of(this.tasks);
    }
    getTasks(q: string): Observable<Task[]> {
        let tasks = this.tasks.filter(t => t.title.indexOf(q) > -1);
        return Observable.of(tasks);
    }

}