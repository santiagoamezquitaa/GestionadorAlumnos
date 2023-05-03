import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message: any;

  constructor() { }

  setMessage(msg: any) {
    this.message = msg;
  }

  getMessage() {
    return this.message;
  }
}
