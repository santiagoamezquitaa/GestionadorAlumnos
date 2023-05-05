import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/interfaces/interfaces';

import swal from 'sweetalert2';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = [
    'id',
    'fullName',
    'birthday',
    'address',
    'educationLevel',
    'gender',
    'email',
    'phone',
    'status',
    'functions',
  ];

  public dataSource: any;
  public subscription: Subscription;

  constructor(
    private studentService: StudentService,
    private sharedService: SharedService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.studentService.getUsers().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(idEliminate: string) {
    this.studentService.deleteData(idEliminate).subscribe(
      (response) => {
        console.log('Usuario eliminado');
        this.dataSource = this.dataSource.filter(
          (student: Student) => student.id !== idEliminate
        );
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Estudiante eliminado! :)',
          showConfirmButton: false,
          timer: 1000,
        });
      },
      (error) => {
        console.error(error);
        swal.fire({
          title: 'Error',
          text: 'No fue posible borrar el registro, intentalo mas tarde :(',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        });
      }
    );
  }

  sendDataUser(element: any) {
    this.sharedService.inscriptionMode(true);
    const index = this.dataSource.findIndex(
      (student: Student) => student.id === element
    );
    this.sharedService.setMessage(this.dataSource[index]);
  }

  changeFormStatus() {
    this.sharedService.inscriptionMode(false);
  }
}
