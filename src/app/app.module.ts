import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { UsersComponent } from './users/users.component';

import { RoutingModule } from './router.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'angular-6-datatable';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HashtagsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
