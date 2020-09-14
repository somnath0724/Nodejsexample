import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePmrComponent } from './create-pmr.component';
import { MatStepperModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Component, OnInit, Input, AfterViewChecked, AfterContentChecked, Output, EventEmitter, VERSION, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { PMR } from '../pmr';
import { PmrWebService } from './pmr-web.service';
import { By } from '@angular/platform-browser';

//example pmr model
let pmr_model = new PMR(0, '', '', '', '', '', '', '', '', '', '', '', 0, 0, '', '', '', '', '', '', '', '', 
'', '', '', '', '', '', '', '', '', '', 0, 0, '', '', '', 0, 0, '', '', '', '', '', '', '', '','', '', '', 0, 
'', '', 0, 0, 0, 0, 0, 0, '', '', '', '', '', '', '');

//start karma tests
describe('CreatePmrComponent', () => {
  let component: CreatePmrComponent;
  let fixture: ComponentFixture<CreatePmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePmrComponent ],
      imports: [ MatStepperModule, MatFormFieldModule, FormsModule, MatSelectModule, MatInputModule, BrowserAnimationsModule],
      providers: [HttpClient, FormBuilder, HttpHandler]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //component should create
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //submit pmr with default values
  it('should create a submit a pmr with default values', () => {
    component.ngOnInit();
    expect(component.pmr_model instanceof PMR).toBe(true);  
  });
  //should send pmr data
  it('should send pmr data as a JSON/String', () => {
    expect(component.pmr_model instanceof PMR).toBe(true); //Change to true when backend is working!
  });
  //not currently on, no backend
  it('should get a 200 response (currently off)', () => {
    expect(component.responseValue instanceof String).toBe(false); //Change to true when backend is working!
    //expect(component.responseValue.statusCode).toBe(200);
  });

  it("spy tracks that onsubmit() was called by form", function() {
    spyOn(component, 'onSubmit');
    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', onsubmit);
    expect(component.onSubmit).toHaveBeenCalled();
    expect(component.testOutput).toBeDefined();
  });
  //make sure event function is called
  it("spy tracks that select_cc_s_a_component(event) was called", function() {

    spyOn(component, 'select_cc_s_a_component');

    const select = fixture.debugElement.query(By.css('#sponsoring_cc_s_a')).nativeElement;
    select.click();
    fixture.detectChanges();
    const selectOptions = fixture.debugElement.queryAll(By.css("#sponsoring_options"));
    selectOptions[3].nativeElement.click();
    select.dispatchEvent(new Event('selectionChange'));
    fixture.detectChanges();

    expect(component.select_cc_s_a_component).toHaveBeenCalled();
  });
  //make sure dropdown is filled correctly
  it("sponsoring_cc_s_a function should set the correct value for other dropdowns", function() {
    expect(component.cssa_selection).toEqual(['USARCENT',
      'USNAVCENT',
      'AFCENT',
      'USMARCENT',
      'USSOCCENT'
    ])
  });
  //make sure dropdown is filled correctly
  it("requested_flights has correct value for dropdown", function() {
    expect(component.flights).toEqual(['WGS-1', 'WGS-2', 'WGS-3', 'WGS-4', 'WGS-5', 'WGS-6', 'WGS-7', 'WGS-8', 'WGS-9', 'WGS-10'])
  });
});
