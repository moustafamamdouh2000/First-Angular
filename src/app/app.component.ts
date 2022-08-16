import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab3';
  @Input() todoList: string;
  ngOnInit(): void {}
  ngOnChanges(): void {}
  logString(str: string) {
    this.todoList = str;
  }
}
