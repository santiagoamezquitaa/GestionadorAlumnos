import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { studentsApi } from '../constant/constants';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<Object> {
    return this.httpClient.get<Object>(studentsApi);
  }

  getSpecificStudent(id: string): Observable<Object> {
    return this.httpClient.get<Object>(studentsApi + `/${id}`);
  }

  postData(data: object): Observable<Object> {
    return this.httpClient.post(studentsApi, data);
  }

  deleteData(id: String) {
    return this.httpClient.delete(studentsApi + `/${id}`);
  }

  putData(id: String, data: String) {
    return this.httpClient.put(studentsApi + `/${id}`, data);
  }
}
