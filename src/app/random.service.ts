import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class RandomService {
    private _random: number = 0;
    constructor() {
        console.log('RandomService created.');
        this._random = Math.floor(Math.random() * 1000);
    }

    get random(): number {
        return this._random;
    }
}