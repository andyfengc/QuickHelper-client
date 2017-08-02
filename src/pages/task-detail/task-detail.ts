import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Task} from '../models/task.model';
import {Message} from '../models/message.model';

/**
 * Generated class for the TaskDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
})
export class TaskDetailPage implements OnInit {
  task : Task;
  messages: Message[]=[];
  message: string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ngOnInit() {
    this.task = this.navParams.data.task;
    console.log(this.navParams);
  }

  send(text){
    this.messages.push({
      "id": 0,
      "senderId" : 0,
      "receiverId" : 0,
      "parentMessageId": 0,
      "taskId" : 0,
      "text": text
    });
  }
}
