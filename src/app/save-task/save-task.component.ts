import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})
export class SaveTaskComponent implements OnInit {

  task: Task = {
    id: 1,
    description: "Task 001"
  } 
  
  constructor() { }

  ngOnInit() {
  }

}
