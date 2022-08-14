import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onClick(): void {
    console.log('clicked');
  }
  mainH1: string = 'h1';
}
