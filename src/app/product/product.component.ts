import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductfilterPipe } from './productfilter.pipe';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductfilterPipe, FormsModule,CategoryComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }
  title = "Ürün Listesi"
  filterText = "";
  products: Product[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
      })
    })
  }
  addToCart(product: Product) {
    // alertify.alert('Ready!');
    this.alertifyService.success(product.name + " sepete eklendi");
    this.alertifyService.error('Error!');
    this.alertifyService.warning('Warning!');

    // alert("sepete eklendi: "+product.name)
  }
}
