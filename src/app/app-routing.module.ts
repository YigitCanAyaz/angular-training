import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductSpecComponent } from './components/product-spec/product-spec.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "home/:ahmet", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact/a/b/c", component: ContactComponent},
  {path: "products", component: ProductComponent, children: [
    { path: "detail/:id", component: ProductDetailComponent, children: [
      {path: "", redirectTo: "overview", pathMatch: "full"},
      {path: "overview", component: ProductOverviewComponent},
      {path: "spec", component: ProductSpecComponent},
    ]}
  ]},
  {path: "**", component: ErrorComponent},


];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
