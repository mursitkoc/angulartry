import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAdd1Component } from './product/product-add-1/product-add-1.component';
import { ProductAdd2Component } from './product/product-add-2/product-add-2.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './services/login.guard';

export const routes: Routes = [
    {path:"products", component:ProductComponent},
    {path:"products-add-1", component:ProductAdd1Component, canActivate:[loginGuard]},
    {path:"products-add-2", component:ProductAdd2Component, canActivate:[loginGuard]},
    {path:"", redirectTo:"products", pathMatch:"full"},
    {path:"products/category/:categoryId", component:ProductComponent},
    {path:"login", component:LoginComponent}
];
