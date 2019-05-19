import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'fullUserName'})
export class FullUserNamePipe implements PipeTransform{


  transform(user): string{
    return `${user.name} ${user.surname}`;
  }
}
