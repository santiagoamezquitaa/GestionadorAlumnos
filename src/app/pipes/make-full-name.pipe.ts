import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeFullName'
})
export class MakeFullNamePipe implements PipeTransform {

  transform(value: string, args: string): unknown {
    return `${value} ${args}`;
  }

}
