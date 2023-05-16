import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/interfaces/interfaces';
import { StudentService } from 'src/app/services/student.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  public dataStudent: any = {};

  public subscription: Subscription;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('username')?.split("+");

    this.subscription = this.studentService.getSpecificStudent(id[0]).subscribe(
      (data) => {
        this.dataStudent = data;     
      },
      (error) => {
        console.error(error);
        swal.fire({
          title: 'Error',
          text: 'Usuario no encontrado, verifica el id o intentalo más tarde :(',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        });
      }
    );

  }

}
