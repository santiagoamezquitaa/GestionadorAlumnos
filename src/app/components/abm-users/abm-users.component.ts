import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ONLY_APAHABETS_NO_SPECIAL_CHARACTERS, ONLY_NUMBERS } from 'src/app/constant/constants';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-abm-users',
  templateUrl: './abm-users.component.html',
  styleUrls: ['./abm-users.component.css']
})
export class AbmUsersComponent implements OnInit {

  public formUsers: FormGroup;
  public inscriptioMode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formUsers = this.formBuilder.group({
      id: [
        '',
        [
          this.inscriptioMode ? Validators.required : Validators.nullValidator,
          Validators.pattern(ONLY_NUMBERS),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(ONLY_APAHABETS_NO_SPECIAL_CHARACTERS),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern(ONLY_APAHABETS_NO_SPECIAL_CHARACTERS),
        ],
      ],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],     
      profile: [[], [Validators.required]],
      numberPhone: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(ONLY_NUMBERS),
        ],
      ],
    });

    if (this.sharedService.getMessage() !== '') {
      this.poblarDatos();
    }

    this.inscriptioMode = this.sharedService.inscriptionStatus;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.formUsers.markAllAsTouched();
        this.formUsers.reset();
      }
    });
  }

  poblarDatos() {
    this.formUsers.patchValue(this.sharedService.getMessage());
  }

  inscribe(): void {
    if (this.formUsers.valid) {
      this.userService.postUsers(this.formUsers.value).subscribe(
        (response) => {
          swal.fire({
            title: 'ENVIADO',
            text: 'Usuario registrado! :)',
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
    if (this.formUsers.valid) {
      this.userService
        .putUsers(this.formUsers.value.id, this.formUsers.value)
        .subscribe(
          (response) => {
            swal.fire({
              title: 'CAMBIOS HECHOS',
              text: 'Usuario actualizado! :)',
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
    this.formUsers.reset();
  }

}
