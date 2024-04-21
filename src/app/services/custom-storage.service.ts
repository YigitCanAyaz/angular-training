import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomStorageService {

  private _data: string;

  set setData(val: any) {
    this._data = val;
  }

  get getData() {
    return this._data;
  }

  removeData(){
    this._data = null;
  }
}
