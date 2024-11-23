import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'century',
})
export class CenturyPipe implements PipeTransform {
    transform(birthYear: number): string {
        if (!birthYear || isNaN(birthYear)) {
            return 'Неизвестный год рождения';
        }

        const century = Math.floor((birthYear - 1) / 100) + 1;
        return `Родился в ${century}-м веке нашей эры`;
    }
}