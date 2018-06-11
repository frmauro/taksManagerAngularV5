import { Component, OnInit } from '@angular/core';

import { Task } from './../Task';
import { TASKS } from './../mock-tasks';



@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks = TASKS;
  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }


  onSelect(task: Task): void {
     this.selectedTask = task;
     console.log(this.selectedTask);
  }

}
