import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono',
  standalone: false
})
export class TelefonoPipe implements PipeTransform {

transform(value: string | number): string {
    if (!value) return '';

    let digits = value.toString().replace(/\D/g, '');

    if (digits.length < 8) return value.toString();

    let formatted = '';

    if (digits.startsWith('0')) {
      digits = digits.substring(1);
    }
    if (digits.length === 10 && digits.startsWith('11')) {
      formatted = digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } 
    else if (digits.length === 10) {
      formatted = digits.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } 
    else if (digits.length === 8) {
      formatted = digits.replace(/(\d{4})(\d{4})/, '$1-$2');
    } 
    else {
      formatted = digits;
    }

    return formatted;
  }

}
