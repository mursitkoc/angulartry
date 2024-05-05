import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductfilterPipe } from './productfilter.pipe';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductfilterPipe, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',

})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) { }
  title = "Ürün Listesi"
  filterText = "";
  products: Product[] =
    [
      { id: 1, name: "laptop", price: 2500, categoryId: 1, description: "asus zenbook", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 1, name: "mouse", price: 500, categoryId: 1, description: "windos mouse", imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]
  ngOnInit(): void {

  }
  addToCart(product: Product) {
    // alertify.alert('Ready!');
    this.alertifyService.success(product.name + " sepete eklendi");
    this.alertifyService.error('Error!');
    this.alertifyService.warning('Warning!');

    // alert("sepete eklendi: "+product.name)
  }
}
