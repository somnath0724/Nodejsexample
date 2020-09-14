import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabsComponent } from './main-tabs.component';
import { CreatePmrComponent } from '../create-pmr/create-pmr.component';
import { FormsModule, FormBuilder } from '@angular/forms';
import { MatStepperModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpHandler } from '@angular/common/http'; 
import { By } from '@angular/platform-browser';

describe('MainTabsComponent', () => {
  let component: MainTabsComponent;
  let fixture: ComponentFixture<MainTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatStepperModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTabsModule, BrowserAnimationsModule ],
      declarations: [ MainTabsComponent, CreatePmrComponent ],
      providers: [ HttpClient, HttpHandler, FormBuilder ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTabsComponent);
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
