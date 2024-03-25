import { Routes } from "@angular/router";
import { AboutComponent } from "../components/about/about.component";
import { ContactComponent } from "../components/contact/contact.component";
import { HomeComponent } from "../components/home/home.component";

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
];