import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeFullNamePipe } from 'src/app/pipes/make-full-name.pipe';
import { MaakeStatusPipe } from 'src/app/pipes/maake-status.pipe';
import { TitlesSizeDirective } from 'src/app/directives/titles-size.directive';


@NgModule({
  declarations: [
    MakeFullNamePipe,
    MaakeStatusPipe,
    TitlesSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MakeFullNamePipe,
    MaakeStatusPipe,
    TitlesSizeDirective
  ],
})
export class SharedModule { }
