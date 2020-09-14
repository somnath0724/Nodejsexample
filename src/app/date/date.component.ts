import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html'
})
export class DateComponent implements OnInit {
  today: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}

