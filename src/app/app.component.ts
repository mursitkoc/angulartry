import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CategoryComponent,
    NavComponent,
    ProductComponent,HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []

})
export class AppComponent {
  title = 'shop';
}
