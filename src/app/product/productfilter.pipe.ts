import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

// @Pipe({
//   name: 'productfilter',
//   standalone: true
// })
// export class ProductfilterPipe implements PipeTransform {

//   transform(value: Product[], filterText:string): Product[ ] {
//     filterText = filterText?filterText.toLocaleLowerCase():""

//     return filterText? value.filter((p:Product)=>p.name
//     .toLocaleLowerCase().indexOf(filterText)!==-1):value;
//   }

// }
@Pipe({
  name: 'productfilter',
  standalone: true
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    filterText = filterText? filterText.toLocaleLowerCase() : '';

    return filterText? value.filter((p) => p?.name?.toLocaleLowerCase().includes(filterText)) : value;
  }

}