import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
 constructor() { }

  ngOnInit(): void {}
}
