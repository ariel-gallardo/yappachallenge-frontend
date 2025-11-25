import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePickerModule } from './custom-date-picker/custom-date-picker.module';
import { TelefonoPipe } from './pipes/telefono-pipe';
import { ValidationErrorsService } from '@features/validation-errors/validation-errors.service';

@NgModule({
  imports: [
    CommonModule,
    CustomDatePickerModule
  ],
  exports: [
    CustomDatePickerModule,
    TelefonoPipe
  ],
  declarations: [
    TelefonoPipe,
  ],
  providers: [
    ValidationErrorsService
  ]
})
export class SharedModule {}
