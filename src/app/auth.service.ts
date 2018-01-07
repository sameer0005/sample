import { Injectable } from '@angular/core';
import { uNames } from './mock';

@Injectable()
export class AuthService {

  constructor() { }

  checkPass(uName: string,pass:string) {
    for (let u of uNames) {
      if (u.uName === uName) 
      {
        if (u.password === pass) {
          return "Password Matching";
        } else {
          return "Password Not Matching";
        }
      }
    }
  }
}
