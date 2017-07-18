import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Double } from './doublepipe.pipe';

import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Double,
    
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
