import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { ProductfilterPipe } from './productfilter.pipe';



@NgModule({
  declarations: [
    ProductComponent,
    ProductfilterPipe
  ],
  imports: [
    CommonModule,
    NgModule,
    FormsModule
  ]
})
export class ProductModule { }
