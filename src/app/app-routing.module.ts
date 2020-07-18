import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CertifiedComponent } from './components/certified/certified.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products/:name', component:ProductsComponent},
  {path:'subcategory/:name', component:SubCategoryComponent},
  {path:'productDetails/:name', component:ProductDetailComponent},
  {path:'certified/:name', component:CertifiedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: "ignore",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
