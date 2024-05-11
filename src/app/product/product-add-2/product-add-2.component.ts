import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { AlertifyService } from '../../services/alertify.service';
import { Category } from '../../category/category';

@Component({
  selector: 'app-product-add-2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-add-2.component.html',
  styleUrl: './product-add-2.component.css',
  providers: [ProductService, CategoryService, AlertifyService]
})
export class ProductAdd2Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private alertifyService: AlertifyService,
    private productService: ProductService,
  ) { }

  productObj: Product = new Product();
  categories: Category[] = [];

  productAddForm: FormGroup = new FormGroup({
    id: new FormControl<number>(4, Validators.required),
    name: new FormControl<string>("", Validators.required),
    price: new FormControl<number>(0, Validators.required),
    categoryId: new FormControl<number>(0, Validators.required),
    description: new FormControl<string>("", Validators.required),
    imageUrl: new FormControl<string>("", Validators.required),
  })

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  add() {
    if (this.productAddForm.valid) {
      // this.productObj.id = this.productAddForm.value.id;
      this.productObj = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.productObj).subscribe(data => {
      console.log(data)
      // this.product = new Product(data.id, data.name, data.price, data.categoryId,data.description,data.imageUrl );
      this.alertifyService.success(data.name + " added successfully")
   }, error => {
      console.log(error)
      this.alertifyService.error(error)
    })
  }

}
