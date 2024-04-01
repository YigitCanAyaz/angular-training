import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { StandaloneComponent } from './app/components/standalone/standalone.component';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { HomeComponent } from './app/components/standalone/home/home.component';
import { AboutComponent } from './app/components/standalone/about/about.component';
import { ProductComponent } from './app/components/standalone/product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, inject } from '@angular/core';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


bootstrapApplication(StandaloneComponent, {
    providers: [
        {provide: "url", useValue: "https://www.google.com"},
        importProvidersFrom([
            HttpClientModule
        ]),
        provideRouter([
            {path: "", component: HomeComponent},
            {path: "about", component: AboutComponent},

            {path: "product/:id", 
            component: ProductComponent,
            data: {
                productName: "Terlik"
            },
        resolve: {
            products: (route, state) => {
                const httpClient: HttpClient = inject(HttpClient);
                return httpClient.get("https://jsonplaceholder.typicode.com/photos");
            }
        }},

    // ], withPreloading(PreloadAllModules), withComponentInputBinding())

        ], withPreloading(PreloadAllModules))
    ]
});