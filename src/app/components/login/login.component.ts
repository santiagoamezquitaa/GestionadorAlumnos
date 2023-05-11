import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUsers: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginUsers = this.formBuilder.group({
      email:[
        '',
      ],
      password: [
        '',
      ]
    })
  }

  send(){
    if (this.loginUsers.valid) {
      this.authService.getUserByEmail(this.loginUsers.value.email).subscribe(
        (response: any) => {
          if(response != ''){
            this.authService.login(response, this.loginUsers.value.password);
          } else {
            swal.fire({
              title: 'Error',
              text: 'No hay ningun registro de este email.',
              icon: 'error',
              confirmButtonColor: '#3085d6',
            });
          }

        },
        (error) => {
          console.error(error);
          
        }
      )
    }
  }

}
