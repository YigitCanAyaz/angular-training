import { DEFAULT_CURRENCY_CODE, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Com1Component } from './com1/com1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleDirective } from './directives/example.directive';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ParentComponent } from './components/parent_to_child_communication/parent/parent.component';
import { ParentComponent as ParentComponent2 } from './components/child_to_parent_communication/parent/parent.component';
// import { ChildComponent } from './components/parent_to_child_communication/child/child.component';
import { ChildComponent as ChildComponent2 } from './components/child_to_parent_communication/child/child.component';
import { Parent3Component } from './components/child_to_child_communication/parent3/parent3.component';
import { Childa2Component } from './components/child_to_child_communication/childa2/childa2.component';
import { Childb2Component } from './components/child_to_child_communication/childb2/childb2.component';
import { ExampleComponent } from './components/example/example.component';
import { LoggerService, ProductService } from './productservice';
import { productServiceIT } from './injection-token';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http'
import { firstValueFrom } from 'rxjs';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReadUserComponent } from './components/read-user/read-user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import { ErrorComponent } from './components/error/error.component';
import { APP_BASE_HREF } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductSpecComponent } from './components/product-spec/product-spec.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { A1Component } from './components/a1/a1.component';
import { B1Component } from './components/b1/b1.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { CustomModule } from './custom/custom.module';
import { CustomStrategy } from './strategies/custom.strategy';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { Standalone2Component } from './components/standalone2/standalone2.component';
import {ChildComponent} from './components/ngtemplateoutlet/child/child.component';
import { Child1Component } from './components/child1/child1.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component'
import { MyInterceptor } from './my.interceptor';
import { PhotosComponent } from './components/photos/photos.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CustomErrorHandler } from './custom.error.handler';
import { CustomHttpInterceptor } from './custom-http.interceptor';
import { HhomeComponent } from './components/hhome/hhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Com1Component,
    ExampleDirective,
    CustomifDirective,
    CustomforDirective,
    CustomPipe,
    ParentComponent,
    ParentComponent2,
    // ChildComponent,
    ChildComponent2,
    Parent3Component,
    Childa2Component,
    Childb2Component,
    ExampleComponent,
    AComponent,
    BComponent,
    CreateUserComponent,
    ReadUserComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductSpecComponent,
    ProductOverviewComponent,
    A1Component,
    B1Component,
    DashboardComponent,
    AdminComponent,
    UserComponent,
    Child1Component,
    Component1Component,
    Component2Component,
    PhotosComponent,
    // StandaloneComponent,
    // AddProductComponent,
    // DetailProductComponent,
    // ListProductComponent,
    // AddCustomerComponent,
    // DetailCustomerComponent,
    // ListCustomerComponent,
    // WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomModule,
    StandaloneComponent,
    Standalone2Component,
    ChildComponent,
    LazyLoadImageModule,
    HhomeComponent,
    // RouterModule.forRoot(routes)
  ],
  providers: [
    // CustomStrategy,
  // {provide: DEFAULT_CURRENCY_CODE, useValue: '₺'},
  //  CustomPipe, 
  //  ProductService, // DI Token - Default Type Token 
  //  LoggerService],
  // {provide: ProductService, useClass: ProductService}, // Type Token
  // {provide: "productService", useClass: ProductService}, // String Token
  LoggerService,
  // {provide: productServiceIT, useClass: ProductService},
  // {provide: "example", useValue: "merhaba"}
  // {provide: "example", useValue: () => {
  //   return "Merhaba";
  // }}
  // {provide: APP_BASE_HREF, useValue: "ahmet"},
  {provide: "productService", useFactory: (httpClient: HttpClient) => {
  const obs = httpClient.get("https://jsonplaceholder.typicode.com/posts")
  .subscribe({next: data => console.log(data)});
  return new ProductService();
  }, 
  deps: [HttpClient]},

  // {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
  {provide: ErrorHandler, useClass: CustomErrorHandler},
  {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
