import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}
  @Input() holder: string;
  todoList: any[] = [];
  ngOnInit(): void {
    this.todoList.shift();
  }
  counter: number;
  ngOnChanges(): void {
    console.log(this.todoList);
    this.todoList.push({
      Name: this.holder,
      Status: 'State: Active',
    });
  }
  Selected: string;
  selectEvent(e: any): void {
    this.Selected = e.target.innerHTML.split(' ')[1];
  }
  deleteTodo(): void {
    for (let index in this.todoList) {
      if (this.todoList[index].Name == this.Selected) {
        this.todoList.splice(parseInt(index), 1);
      }
    }
  }
  completeTodo(): void {
    for (let element of this.todoList) {
      console.log(element);
      if (
        element.Status.split(' ')[1] == 'Active' &&
        this.Selected == element.Name
      ) {
        element.Status = 'State: Complete';
      }
    }
  }
}
