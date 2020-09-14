import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { satellites } from '../mock-satellites';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
  products = satellites;

  constructor() { }

  ngOnInit() {
  }

}
