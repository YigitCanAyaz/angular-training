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
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { A1Component } from './components/a1/a1.component';
import { B1Component } from './components/b1/b1.component';
import { canActivateChildGuard, canActivateGuard, canDeactivateGuard, isAdminGuard, isUserGuard, resolveGuard } from './guards/guards';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { DetailCustomerComponent } from './components/customers/detail-customer/detail-customer.component';
import { ListCustomerComponent } from './components/customers/list-customer/list-customer.component';

const routes: Routes = [
  // {path: "", redirectTo: "/home", pathMatch: "full"},
  // {path: "home", component: HomeComponent},
  // {path: "home/:ahmet", component: HomeComponent},
  // {path: "about", component: AboutComponent},
  // {path: "dashboard", component: AdminComponent, canMatch: [isAdminGuard]},
  // {path: "dashboard", component: UserComponent, canMatch: [isUserGuard]},
  // {path: "contact/a/b/c", component: ContactComponent},
  // {path: "products", component: ProductComponent, 
  // data: {key1: 'value1', key2: 'value2'},
  // canActivate: [canActivateGuard],
  // canActivateChild: [canActivateChildGuard],
  // canDeactivate: [canDeactivateGuard],
  // resolve: {photos : resolveGuard},
  // children: [
  //   { path: "detail/:id", component: ProductDetailComponent, children: [
  //     {path: "", redirectTo: "overview", pathMatch: "full"},
  //     {path: "overview", component: ProductOverviewComponent},
  //     {path: "spec", component: ProductSpecComponent},
  //   ]}
  // ]},
  // {path: "a", component: A1Component},
  // {path: "b", component: B1Component},
  // {path: "**", component: ErrorComponent},

  {path: "", component: WelcomeComponent},
  {path: "customers", loadChildren : () => 
  import("../app/components/customers/customers.module").then(m => m.CustomersModule)},
  {path: "products", loadChildren : () => 
  import("../app/components/products/products.module").then(m => m.ProductsModule)}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
