import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usersApi } from '../constant/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(): Observable<Object> {
    return this.httpClient.get<Object>(usersApi);
  }

  postUsers(data: object): Observable<Object> {
    return this.httpClient.post(usersApi, data);
  }

  deleteUsers(id: String) {
    return this.httpClient.delete(usersApi + `/${id}`);
  }

  putUsers(id: String, data: String) {
    return this.httpClient.put(usersApi + `/${id}`, data);
  }
}
