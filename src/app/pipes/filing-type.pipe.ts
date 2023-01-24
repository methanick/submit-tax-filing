import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filingType',
})
export class FilingTypePipe implements PipeTransform {
    transform(type: string|number): string {
        if (type == 1) {
            return 'Additional Filing'
        } else {
            return 'Ordinary Filing';
        }
    }
}
