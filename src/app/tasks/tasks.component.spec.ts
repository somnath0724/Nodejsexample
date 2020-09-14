import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatStepperModule, MatFormFieldModule, MatSelectModule, MatButtonToggleModule, MatInputModule, MatTabsModule } from '@angular/material';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComponent ],
      imports: [ MatStepperModule, MatFormFieldModule, FormsModule, MatSelectModule, MatButtonToggleModule, MatInputModule, BrowserAnimationsModule, MatTabsModule ],
      providers: [HttpClient, FormBuilder, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check to see if products array was filled', () => {
    expect(component.products).toBeDefined();
  });
});
