import { Pipe, PipeTransform } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Pipe({
  name: 'count'
})

export class CountPipe implements PipeTransform {
  sum;

  transform(value: number[], args?: any): number {
    return value.reduce((acc, cur) => acc + cur, 0);
  }
}
