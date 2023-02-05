import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../http/customer/customer.DTO';

@Pipe({
    name: 'convertDataViewPipe'
})

export class convertDataViewPipe implements PipeTransform {
    transform(value: any, arrRole: Role[]): string {
        if( value === null || value === undefined || value === '') {
            return 'unknown';
        } else {
            const index = arrRole.findIndex(x => x.value.toString() === value.toString());
            return arrRole[index].valueView;
        }
    }
}
