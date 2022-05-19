import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  tasklist:any = [];
  newListTask: any = [];

  addtask:any = {
    
    title:'', 
    description: ''

  };

  constructor() { }

  ngOnInit(): void {
    this.newListTask = JSON.parse(localStorage.getItem('$key') || '[]')
  }

  // getNewTask(){
  //   this.newListTask = JSON.parse(localStorage.getItem('$key') || '[]')
  // }
  newTask(){
    if (this.addtask){
        this.newListTask.push(this.addtask);
        localStorage.setItem('$key', JSON.stringify(this.newListTask))
        console.log(this.newListTask)
        this.addtask = {};
      }
  }

  deleteTask(index:number){
    if (index >= 0) {
      console.log(index)
      this.newListTask.splice(index, 1);
    localStorage.setItem('$key', JSON.stringify(this.newListTask));
  }

  // deleteTask(index:number){
  //   if (index >= 0) {
  //     console.log(index)
  // }

}
}