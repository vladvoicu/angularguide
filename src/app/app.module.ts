import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import { HeroesModule } from './heroes/heroes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComposeMessageComponent } from './compose-message.component';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
 
    
    PageNotFoundComponent,
 
    
    ComposeMessageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
   AppRoutingModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
