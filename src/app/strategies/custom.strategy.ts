import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

export class CustomStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        // customers - preloading : true
        // products - preloading : true
        if (route.data["preload"] == true) {
            return fn(); // o anki module'un yüklenmesi
        }
        else {
            return of(); // ön yükleme yapmak istemezsek
        }
    }

}