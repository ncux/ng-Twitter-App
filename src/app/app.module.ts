import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { UsersComponent } from './users/users.component';

import { RoutingModule } from './router.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatToolbarModule } from '@angular/material';
import { DataTableModule } from 'angular-6-datatable';

@NgModule({
  declarations: [
    AppComponent,
    HashtagsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
