import { Component, Input } from '@angular/core';

@Component({
    selector: 'custom-content',
    templateUrl: './custom-content.component.html',
    styleUrls: ['./custom-content.component.css']
})
export class CustomContentComponent {

    @Input() flight: Object;

};