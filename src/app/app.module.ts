import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule 
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
