import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePickerModule } from './custom-date-picker/custom-date-picker.module';
import { TelefonoPipe } from './pipes/telefono-pipe';

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
    TelefonoPipe
  ]
})
export class SharedModule {}
