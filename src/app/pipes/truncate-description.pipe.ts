

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription',
  standalone: true,
})
export class TruncateDescriptionPipe implements PipeTransform {
  // Used to truncate a string to a certain length
  transform(
    value: string,
    maxLength: number = 36,
    ellipsis: string = '...'
  ): unknown {
    if (value.length > maxLength) {
      return value.slice(0, maxLength) + ellipsis;
    }

    return value;
  }
}
