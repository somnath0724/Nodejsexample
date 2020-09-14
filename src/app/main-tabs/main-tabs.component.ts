//import statements
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { satellites } from '../mock-satellites';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainTabsComponent implements OnInit {
  //add dumby satellites to products array
  products = satellites;

  constructor() { }

  ngOnInit() {
  }

}
