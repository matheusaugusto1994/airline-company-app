import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  flights: Object[] = [];

  constructor (http: Http){

    http
      .get('http://localhost:8080/flights')
      .map(res => res.json())
      .subscribe(flights => {      
        this.flights = flights;
      }, error => console.log(error));
  }
}
