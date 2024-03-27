import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";

export const canActivateGuard : CanActivateFn 
= (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // ...
    // ...
    // business ...

    console.log('CanActivate Guard');
    return true;
}

export const canActivateChildGuard : CanActivateChildFn 
= (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.log('CanActivateChild Guard');
    return true;
}

export const canDeactivateGuard : CanDeactivateFn<any> = (
component: any, currentRoute: ActivatedRouteSnapshot, 
currentState: RouterStateSnapshot, 
nextState: RouterStateSnapshot) => {
    console.log('CanDeactivate Guard');

    return true;
}

export const resolveGuard : ResolveFn<any> = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const httpClient = inject(HttpClient);
    return httpClient.get("https://jsonplaceholder.typicode.com/photos");
};

export const isAdminGuard : CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    return !!localStorage.getItem("admin");
}

export const isUserGuard : CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    return !localStorage.getItem("admin");
}