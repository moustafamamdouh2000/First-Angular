import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() sendString = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  getInput(str: string) {
    this.sendString.emit(str);
  }
}
