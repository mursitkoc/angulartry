import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-2',
  standalone: true,
  imports: [],
  templateUrl: './product-add-2.component.html',
  styleUrl: './product-add-2.component.css'
})
export class ProductAdd2Component implements OnInit {
  constructor(private formBuilder:FormBuilder){}

  productObj: Product = new Product(0, "", 0, 0, "", "");
  
  productAddForm = new FormGroup({
    id: new FormControl<number>(4,Validators.required),
    name: new FormControl<string>("",Validators.required),
    price: new FormControl<number>(0,Validators.required),
    categoryId: new FormControl<number>(0,Validators.required),
    description: new FormControl<string>("",Validators.required),
    imageUrl: new FormControl<string>("",Validators.required),
  })
  

  ngOnInit(): void {

  }

  add(){
    if(this.productAddForm.valid){
      this.productObj = Object.assign({}, this.productAddForm.value)
    }
  }

}
