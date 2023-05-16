import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/interfaces';
import swal from 'sweetalert2';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = [
    'id',
    'fullName',
    'email',
    'profile',
    'address',
    'phone',
    'functions',
  ];

  public dataSource: any;
  public subscription: Subscription;

  constructor(
    private userService: UserService,
    private sharedService: SharedService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.userService.getUsers().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(idEliminate: string) {
    this.userService.deleteUsers(idEliminate).subscribe(
      (response) => {
        this.dataSource = this.dataSource.filter(
          (user: User) => user.id !== idEliminate
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
      (user: User) => user.id === element
    );
    this.sharedService.setMessage(this.dataSource[index]);
  }

  changeFormStatus() {
    this.sharedService.inscriptionMode(false);
  }
}
