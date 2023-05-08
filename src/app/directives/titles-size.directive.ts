import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitlesSize]'
})
export class TitlesSizeDirective{

  constructor(private elemento: ElementRef ) {
    this.elemento.nativeElement.style.fontSize = '2rem';
  }
}
