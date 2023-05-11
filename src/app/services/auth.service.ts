import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usersApi } from '../constant/constants';

import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  login(userCredentials: any, password: string) {
    if (userCredentials[0].password === password) {
      localStorage.setItem('accessValid', 'true');
      return this.router.navigate(['/admin-page/home']);;
    } else {
      localStorage.setItem('accessValid', 'false');
      return swal.fire({
        title: 'Error',
        text: 'Tu constraseña no coincide con el email proporcionado',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
    }
  }

  logout(): void {
    localStorage.setItem("accessValid", "false");
  }

  getUserByEmail(email: string): Observable<Object> {
    return this.httpClient.get(`${usersApi}?email=${email}`);
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('accessValid') !== "false");
  }
}
