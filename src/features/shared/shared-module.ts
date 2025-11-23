import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePickerModule } from './custom-date-picker/custom-date-picker.module';

@NgModule({
  imports: [
    CommonModule,
    CustomDatePickerModule
  ],
  exports: [
    CustomDatePickerModule
  ]
})
export class SharedModule {}
