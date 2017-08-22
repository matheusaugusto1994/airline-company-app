import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByDestiny'
})
export class FilterByDestiny implements PipeTransform{

    transform(flights, search: string){
        search = search.toLowerCase();
        return flights.filter(flight => flight.destiny.toLowerCase().includes(search));
    }

}