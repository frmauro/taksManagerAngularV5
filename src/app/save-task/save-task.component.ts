import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})
export class SaveTaskComponent implements OnInit {

  description = "Task 001";
  
  constructor() { }

  ngOnInit() {
  }

}
