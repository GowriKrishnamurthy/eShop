import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path:'products', component:ProductListComponent},
  { path:'products/:id', canActivate: [ProductDetailGuard], component:ProductDetailComponent} 
];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path:'products', component:ProductListComponent},
      { path:'products/:id', canActivate: [ProductDetailGuard], component:ProductDetailComponent} 
    ])
   ],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
