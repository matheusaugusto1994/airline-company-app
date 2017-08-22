import { Component, Input } from '@angular/core';

@Component({
    selector: 'property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.css']
})
export class PropertyComponent {

    @Input() label: string;
    @Input() value: string;

}