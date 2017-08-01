import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TaskService} from '../services/task.service';
import {Task} from '../models/task.model';
import {TaskDetailPage} from '../task-detail/task-detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TaskService]
})
export class HomePage implements OnInit {
  tasks: Task[];

  constructor(private navCtrl: NavController
  , private taskService : TaskService) {

  }

  ngOnInit(){
    this.tasks = this.taskService.getNewTasks();
  }

  showTask(task){
    console.log('open - ', task);
    this.navCtrl.push(TaskDetailPage);
  }
 
}
