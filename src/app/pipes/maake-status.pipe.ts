import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maakeStatus',
})
export class MaakeStatusPipe implements PipeTransform {
  transform(value: string): unknown {
    return value === 'true' ? 'Activo' : 'Inactivo';
  }
}
