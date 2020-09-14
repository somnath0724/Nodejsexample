import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, FormBuilder } from '@angular/forms';
import { MatStepperModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpHandler } from '@angular/common/http';   
import { RouterTestingModule } from '@angular/router/testing';



import { TopBarComponent } from './top-bar.component';
import { DateComponent } from '../date/date.component';
import { RouterModule } from '@angular/router';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarComponent, DateComponent ],
      imports: [ MatStepperModule, MatFormFieldModule, RouterTestingModule, FormsModule, MatSelectModule, MatInputModule, BrowserAnimationsModule, RouterModule ],
      providers: [ HttpClient, FormBuilder, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
