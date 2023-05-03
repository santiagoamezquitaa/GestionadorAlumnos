import { Injectable } from '@angular/core';
import { dataStudents } from '../components/data/data-students';

import swal from'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  createData(element: any){
    dataStudents.push(element);
    swal.fire({
      title: 'ENVIADO',
      text: 'Alumno registrado! :)',
      icon: 'success',
      confirmButtonColor: '#3085d6'
    });
  }

  deleteData(element: any): any{
    const index = dataStudents.findIndex(student => student.id == element);
    if (index !== -1) {
      dataStudents.splice(index, 1);
      return [...dataStudents];
    }
  }

  updateData(element: any){
    const index = dataStudents.findIndex(student => student.id === element.id);
    dataStudents[index] = element;
    swal.fire({
      title: 'ENVIADO',
      text: 'La información ha sido actualizada! :)',
      icon: 'success',
      confirmButtonColor: '#3085d6'
    });
  }
}
