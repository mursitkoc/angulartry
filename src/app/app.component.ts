import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountServiceService } from './services/account-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CategoryComponent,
    NavComponent,
    SidebarComponent,
    ProductComponent,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []

})
export class AppComponent {
  constructor(
    private acountService:AccountServiceService
   ) { }
  title = 'shop';
  isLoggredIn(){
    return this.acountService.isLoggedIn();
  }
  logOut(){
    this.acountService.logOut();
  }
}
