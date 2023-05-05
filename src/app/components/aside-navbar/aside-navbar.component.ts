import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-aside-navbar',
  templateUrl: './aside-navbar.component.html',
  styleUrls: ['./aside-navbar.component.css'],
})
export class AsideNavbarComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  changeFormStatus() {
    this.sharedService.inscriptionMode(false);
  }
}
