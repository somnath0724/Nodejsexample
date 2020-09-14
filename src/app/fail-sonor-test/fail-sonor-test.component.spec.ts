import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailSonorTestComponent } from './fail-sonor-test.component';

describe('FailSonorTestComponent', () => {
  let component: FailSonorTestComponent;
  let fixture: ComponentFixture<FailSonorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailSonorTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailSonorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
