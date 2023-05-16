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

  // public currentUser: any = { name: '', lastName: '', profile: ''};

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  login(userCredentials: any, password: string) {
    if (userCredentials[0].password === password) {
      localStorage.setItem('accessValid', 'true');
      localStorage.setItem('userName', userCredentials[0].name);
      localStorage.setItem('lastName', userCredentials[0].lastName);
      localStorage.setItem('userProfile', userCredentials[0].profile);
      if (userCredentials[0].profile === 'administrator') {
        return this.router.navigate(['admin-page/home']);
      } else {
        return this.router.navigate(['user-page/home']);
      }
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
    localStorage.removeItem("userName");
    localStorage.removeItem("lastName");
    localStorage.setItem("userProfile", "null");
  }

  getUserByEmail(email: string): Observable<Object> {
    return this.httpClient.get(`${usersApi}?email=${email}`);
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('accessValid') !== "false");
  }

  public get profileAdmin(): boolean {
    return (localStorage.getItem('userProfile') === "administrator");
  }

  public get profileUser(): boolean {
    return (localStorage.getItem('userProfile') === "user");
  }
}
