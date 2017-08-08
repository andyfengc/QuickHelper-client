import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DummyTaskService } from '../services/dummy.task.service';
import { Task } from '../models/task.model';
import { TaskDetailPage } from '../task-detail/task-detail';
import {TaskPage} from '../task/task.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DummyTaskService]
})
export class HomePage implements OnInit {
  tasks: Task[];
  searchOn: boolean = false;
  shouldShowCancel: boolean = false;
  searchTerm: string;

  constructor(private navCtrl: NavController
    , private taskService: DummyTaskService) {

  }

  ngOnInit() {
    this.tasks = this.taskService.getAllTasks();
  }

  showTask(task) {
    console.log('open - ', task);
    this.navCtrl.push(TaskDetailPage, {
      task: task
    });
  }

  search(event) {
    if (!this.searchTerm) {
      this.tasks = this.taskService.getAllTasks();
    }
    else {
      this.tasks = this.taskService.getTasks(this.searchTerm);
    }
  }

  cancelSearch(event) {
    console.log('cancel search ' + event);
  }

  showAddTask(){
    this.navCtrl.push(TaskPage);
  }
}
