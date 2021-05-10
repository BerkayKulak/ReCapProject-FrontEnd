import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { Cardto } from '../models/cardto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Cardto[],filterText:string): Cardto[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Cardto) =>p.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
