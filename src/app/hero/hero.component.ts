import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor() {}
  prop: string = 'test prop';// use attribute binding to assign dynamic id
  ngOnInit(): void {}
  onClick(): void {
    console.log('clicked');
  }
}
