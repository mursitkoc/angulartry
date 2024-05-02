import { Component } from '@angular/core';
import { Category } from './category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent{

  title="Kategori Listesi"
  categories : Category[] = [
    {id:1, name:"Bilgisayar"},
    {id:2, name:"Telefon"},
    {id:3, name:"Ev Elektroniği"}
  ]
}
