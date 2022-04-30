import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LowerAndUpper } from './custome-pipe/lower-Upper';
import { TempratureConverter } from './custome-pipe/temp-cvt';

@NgModule({
  declarations: [
    AppComponent,
    TempratureConverter,
    LowerAndUpper
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
