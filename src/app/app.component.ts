import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uName: string = '';
  pass: string = '';
  msg: string = '';
  constructor(private aService:AuthService) {}

  onSubmit(uName: string, pass: string){
    console.log(this.uName,this.pass);
    this.msg = this.aService.checkPass(this.uName,this.pass);
  }

}
