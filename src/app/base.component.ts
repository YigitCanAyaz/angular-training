import { Directive } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";

@Directive()
export class BaseComponent {
    constructor(public title: Title, public router: Router, public activatedRoute: ActivatedRoute) {
    }
}
