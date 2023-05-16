import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-aside-navbar',
  templateUrl: './aside-navbar.component.html',
  styleUrls: ['./aside-navbar.component.css'],
})
export class AsideNavbarComponent implements OnInit {

  public rolePath: string;
  public role: string | null;

  constructor(
    private sharedService: SharedService,
    public authService : AuthService,
    ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('userProfile');
    this.rolePath = this.role === 'administrator' ? '/admin-page' : '/user-page';
  }

  changeFormStatus() {
    this.sharedService.inscriptionMode(false);
  }

  exit(): void {
    this.authService.logout();
  }

}
