import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }    from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppComponent }        from './app.component';
import { UsersComponent}       from './component/users.component';
import { UserDetailComponent } from './component/user-detail.component';
import { UserService }         from './service/user.service';
import { DashboardComponent }  from "./component/dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
