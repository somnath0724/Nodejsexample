//import statements
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule, MatTabsModule, MatDatepickerModule, MatIconModule, 
  MatSelectModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, 
  MatInputModule, MatExpansionModule, MatStepperModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DateComponent } from './date/date.component';
import { MainTabsComponent } from './main-tabs/main-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CreatePmrComponent } from './create-pmr/create-pmr.component';
import { PmrWebService } from './create-pmr/pmr-web.service'
import { TasksComponent } from './tasks/tasks.component';
import { FailSonorTestComponent } from './fail-sonor-test/fail-sonor-test.component';

@NgModule({
  //declaring imports
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule, 
    MatIconModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatFormFieldModule,
    MatButtonToggleModule, 
    MatInputModule, 
    MatSelectModule, 
    MatTabsModule,
    MatDatepickerModule, 
    MatExpansionModule,
    MatStepperModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: MainTabsComponent },
      //route for main component
    ]),
    //for browser animations
    BrowserAnimationsModule,
  ],
  //declaring services
  providers:[
    PmrWebService,
  ],
  //declare components
  declarations: [
    AppComponent,
    TopBarComponent,
    DateComponent,
    MainTabsComponent,
    CreatePmrComponent,
    TasksComponent,
    FailSonorTestComponent,
  ],
  // Bootstrap for app component
  bootstrap: [ AppComponent ],
  // Add custom schema
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
//export app module
export class AppModule { }

