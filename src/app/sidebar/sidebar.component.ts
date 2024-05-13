import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers: [AccountServiceService]
})
export class SidebarComponent implements OnInit {
 constructor(
  private acountService:AccountServiceService
 ) { }

  ngOnInit(): void {}

  isLoggredIn(){
    return this.acountService.isLoggedIn();
  }
  logOut(){
    this.acountService.logOut();
  }
}
