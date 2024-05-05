import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    {path:"products", component:ProductComponent},
    {path:"", redirectTo:"products", pathMatch:"full"},
    {path:"products/category/:categoryId", component:ProductComponent}
];
