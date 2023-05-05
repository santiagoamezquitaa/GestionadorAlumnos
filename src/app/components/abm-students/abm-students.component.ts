import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { StudentService } from '../../services/student.service';
import { NavigationEnd, Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-abm-students',
  templateUrl: './abm-students.component.html',
  styleUrls: ['./abm-students.component.css'],
})
export class AbmStudentsComponent implements OnInit {
  public formStudents: FormGroup;
  public inscriptioMode: boolean;

  private ONLY_APAHABETS_NO_SPECIAL_CHARACTERS =
    /^[a-zA-Z\u00F1\u00D1\s]+(\s[a-zA-Z\u00F1\u00D1]+)*$/;
  private ONLY_NUMBERS = /^([0-9]\d*)?$/;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formStudents = this.formBuilder.group({
      id: [
        '',
        [
          this.inscriptioMode ? Validators.required : Validators.nullValidator,
          Validators.pattern(this.ONLY_NUMBERS),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.ONLY_APAHABETS_NO_SPECIAL_CHARACTERS),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern(this.ONLY_APAHABETS_NO_SPECIAL_CHARACTERS),
        ],
      ],
      birthday: ['', [Validators.required]],
      address: ['', [Validators.required]],
      educationLevel: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(this.ONLY_NUMBERS),
        ],
      ],
      isActive: ['', [Validators.required]],
    });

    if (this.sharedService.getMessage() !== '') {
      this.poblarDatos();
    }

    this.inscriptioMode = this.sharedService.inscriptionStatus;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.formStudents.markAllAsTouched();
        this.formStudents.reset();
      }
    });
  }

  poblarDatos() {
    this.formStudents.patchValue(this.sharedService.getMessage());
  }

  inscribe(): void {
    if (this.formStudents.valid) {
      this.studentService.postData(this.formStudents.value).subscribe(
        (response) => {
          swal.fire({
            title: 'ENVIADO',
            text: 'Alumno registrado! :)',
            icon: 'success',
            confirmButtonColor: '#3085d6',
          });
          this.onClear();
        },
        (error) => {
          swal.fire({
            title: 'Error',
            text: 'No fue posible realizar el registro, intentalo mas tarde :(',
            icon: 'error',
            confirmButtonColor: '#3085d6',
          });
          console.error(error);
        }
      );
    }
  }

  edit(): void {
    if (this.formStudents.valid) {
      this.studentService
        .putData(this.formStudents.value.id, this.formStudents.value)
        .subscribe(
          (response) => {
            swal.fire({
              title: 'CAMBIOS HECHOS',
              text: 'Alumno actualizado! :)',
              icon: 'success',
              confirmButtonColor: '#3085d6',
            });
            this.onClear();
          },
          (error) => {
            swal.fire({
              title: 'Error',
              text: 'No fue posible realizar la edición, intentalo mas tarde :(',
              icon: 'error',
              confirmButtonColor: '#3085d6',
            });
            console.error(error);
          }
        );
    }
  }

  onClear() {
    this.sharedService.setMessage('');
    this.formStudents.reset();
  }
}
