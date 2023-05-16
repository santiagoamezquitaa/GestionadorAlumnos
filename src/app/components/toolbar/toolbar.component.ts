import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public userName: string | null;
  public lastName: string | null;
  public userProfile: string | null;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.lastName = localStorage.getItem('lastName');
    this.userProfile = localStorage.getItem('userProfile');
  }

}
