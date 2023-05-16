import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeFullName'
})
export class MakeFullNamePipe implements PipeTransform {

  transform(value: string | null, args: string | null): string {
    return `${value} ${args}`;
  }

}
