import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MomentModule } from 'angular2-moment';

import { CustomContentComponent } from './custom-content.component';
import { PropertyModule } from '../property/property.module';

@NgModule({
    imports: [ BrowserModule, PropertyModule, MomentModule ],
    declarations: [ CustomContentComponent ],
    exports: [ CustomContentComponent ]
})
export class CustomContentModule{}