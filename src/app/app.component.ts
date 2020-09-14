import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  //sidebar open variables 
  public _opened: boolean = false;
  public _opened_right: boolean = false;

  //function for opening left sidebar
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  // function for opening right sidebar
  public _toggleSidebar_right() {
    this._opened_right = !this._opened_right;
  }
  //creates the page router
  constructor(public router: Router){}
  // title of the web app
  title = 'PTES';
}
