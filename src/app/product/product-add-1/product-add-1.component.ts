import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Product } from '../product';
import { Category } from '../../category/category';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-product-add-1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-add-1.component.html',
  styleUrl: './product-add-1.component.css',
  providers: [CategoryService, ProductService]
})
export class ProductAdd1Component implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService 
  ) { }
  productObj: Product = new Product(0, "", 0, 0, "", "");
  categories: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
  add(form: NgForm) {
    this.productService.addProduct(this.productObj).subscribe(data => {
      console.log(data)
      // this.product = new Product(data.id, data.name, data.price, data.categoryId,data.description,data.imageUrl );
      this.alertifyService.success(data.name +" added successfully")
      form.resetForm();
    })
  }

}
