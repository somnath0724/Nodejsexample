import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TasksComponent } from './tasks/tasks.component';
import { MainTabsComponent } from './main-tabs/main-tabs.component';
import { DateComponent } from './date/date.component';
import { CreatePmrComponent } from './create-pmr/create-pmr.component';
import { SidebarModule } from 'ng-sidebar';
import { MatStepperModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonToggleModule, MatTabsModule } from '@angular/material';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SidebarModule,
        MatStepperModule, 
        MatFormFieldModule, 
        FormsModule, 
        MatSelectModule, 
        MatInputModule, 
        BrowserAnimationsModule,
        MatFormFieldModule, FormsModule, MatSelectModule, MatButtonToggleModule, MatInputModule, BrowserAnimationsModule, MatTabsModule
      ],
      declarations: [
        AppComponent,
        TopBarComponent,
        TasksComponent,
        MainTabsComponent,
        DateComponent,
        CreatePmrComponent
      ],
      providers: [HttpClient, FormBuilder, HttpHandler]
    }).compileComponents();
  }));

  it('should create the app', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController ) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'PTES'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PTES');
  });

});
