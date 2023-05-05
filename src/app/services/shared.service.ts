import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  message: any;
  inscriptionStatus: any = false;

  constructor() {}

  setMessage(msg: any): void {
    this.message = msg;
  }

  getMessage(): String {
    return this.message;
  }

  inscriptionMode(state: boolean) {
    this.inscriptionStatus = state;
    return this.inscriptionStatus;
  }
}
