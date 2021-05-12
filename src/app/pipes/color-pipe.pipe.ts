import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'colorPipe'
})
export class ColorPipePipe implements PipeTransform {

  transform(value: Color[], filterText:string): Color[] {
    filterText = filterText?filterText.toLocaleUpperCase():""
    return filterText?value.filter((c:Color)=>c.colorName.toLocaleUpperCase().indexOf(filterText)!==-1):value;
  }

}
