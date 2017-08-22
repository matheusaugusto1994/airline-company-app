import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilterByDestiny } from './app.pipes';

import { AccordionModule } from 'ng2-accordion';
import { MomentModule } from 'angular2-moment';

import { PropertyModule } from './property/property.module';

import 'rxjs/add/operator/map';

@NgModule({
  imports: [BrowserModule, HttpModule, AccordionModule, MomentModule, PropertyModule],
  declarations: [AppComponent, FilterByDestiny],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
