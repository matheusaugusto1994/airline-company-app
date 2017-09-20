import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilterByDestiny } from './app.pipes';

import { CustomContentModule } from './custom-content/custom-content.module';

import { AccordionModule } from 'ng2-accordion';

import 'rxjs/add/operator/map';

@NgModule({
  imports: [BrowserModule, HttpModule, AccordionModule, CustomContentModule],
  declarations: [AppComponent, FilterByDestiny],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
