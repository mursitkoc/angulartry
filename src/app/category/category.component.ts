import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CommonModule } from '@angular/common';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoriService: CategoryService
  ) { }

  title="Kategori Listesi"
  categories : Category[] = []

  ngOnInit(): void {
    this.categoriService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
}
