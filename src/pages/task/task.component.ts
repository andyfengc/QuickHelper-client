import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Task } from '../models/task.model';

@Component({
    selector: 'new-task',
    templateUrl: './task.component.html'
})

export class TaskPage {
    task: Task = new Task();

    constructor(private navCtrl: NavController
        , private navParams: NavParams
        , private alertCtrl: AlertController) {
    //         this.task ={
    //     "id": 1,
    //     "authorId": "u1",
    //     "nickname": "机器猫",
    //     "avatar": "http://lorempixel.com/100/100/nature/1/",
    //     "title": "请求扫雪",
    //     "content": "20米\n车库门前到人行道",
    //     "createdTime": new Date(),
    //     "startTime": new Date(),
    //     "endTime": new Date(),
    //     "price": 20,
    //     "address": "912 panarama hills close n/w"
    // };
    }

    postTask(task: Task){
        let alert  = this.alertCtrl.create({
            title: 'You posted a new task',
            message: 'Task ' + this.task.title + ' was posted successfully!',
            buttons: ['OK']
        });
        alert.present();
    }
}
