import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Task } from '../models/task.model';
import { Message } from '../models/message.model';

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
  task: Task;
  messages: Message[] = [];
  message: string;
  authorId: number = 1;
  readerId: number = 2;
  alternate: boolean = false;
  text: string;

  constructor(private navCtrl: NavController, private navParams: NavParams
    , private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.task = this.navParams.data.task;
    console.log(this.navParams);
  }

  send(text) {
    this.messages.push({
      "id": 0,
      "senderId": this.alternate ? this.authorId : this.readerId,
      "receiverId": this.alternate ? this.readerId : this.authorId,
      "parentMessageId": 0,
      "taskId": 0,
      "text": text, 
      "createdTime": new Date()
    });
    this.alternate = !this.alternate;
    this.text = "";
  }

  isReader(message: Message) {
    return this.readerId != message.senderId;
  }

  accept() {
    let alert = this.alertCtrl.create({
      title: 'You accepted this task',
      subTitle: 'Thanks for accepting task: ' + this.task.title,
      buttons: ['OK']
    })
    alert.present();
  }

  reject() {
    let alert = this.alertCtrl.create({
      title: 'Reject task: ' + this.task.title,
      message: 'Are you sure to reject ' + this.task.title + ' ' + this.task.content + ' ?',
      buttons: [{
        text: 'Reject',
        handler: () => {
          let confirmed = this.alertCtrl.create({
            title: 'You rejected task: ' + this.task.title + ' successfully',
            buttons: ['OK']
          })
          confirmed.present();
        }
      }
        , {
        text: 'Cancel'
      }]
    })
    alert.present();
  }

  hold(){
    let alert = this.alertCtrl.create({
      title: 'You put task ' + this.task.title + ' into consider list',
      buttons: ['OK']
    })
    alert.present();
  }
}
