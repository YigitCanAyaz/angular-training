import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
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
import { ChildComponent } from './components/parent_to_child_communication/child/child.component';
import { ChildComponent as ChildComponent2 } from './components/child_to_parent_communication/child/child.component';
import { Parent3Component } from './components/child_to_child_communication/parent3/parent3.component';
import { Childa2Component } from './components/child_to_child_communication/childa2/childa2.component';
import { Childb2Component } from './components/child_to_child_communication/childb2/childb2.component';
import { ExampleComponent } from './components/example/example.component';
import { LoggerService, ProductService } from './productservice';
import { productServiceIT } from './injection-token';
import {HttpClient, HttpClientModule} from '@angular/common/http'
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
    ChildComponent,
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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
