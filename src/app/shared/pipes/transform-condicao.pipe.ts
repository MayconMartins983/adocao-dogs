import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformCondicao'
})
export class TransformCondicaoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === true) {
      return 'Sim'
    } else {
      return "Não"
    }
  }

}
