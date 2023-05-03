import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maakeStatus'
})
export class MaakeStatusPipe implements PipeTransform {

  transform(value: boolean): unknown {
    return value ? 'Activo': 'Inactivo';
  }

}
