import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface ValidationError {
  property: string;
  message: string;
}

@Injectable()
export class ValidationErrorsService {

  applyErrors(form: FormGroup, errors: ValidationError[][]): void {

    if (!errors || errors.length === 0) {
      form.setErrors(null);
      return;
    }
    form.setErrors(null);

    for (const group of errors) {
      if (!group || group.length === 0) continue;

      const property = group[0].property.replace(/[_\- ]+/g, ' ')           
      .split(' ')
      .map(w => w.charAt(0).toLocaleLowerCase() + w.slice(1))
      .join('');
      const control = form.get(property);

      if (!control) continue; 

      const messages = group.map(e => e.message);
      control.setErrors({data: messages});
    }
  }
}
