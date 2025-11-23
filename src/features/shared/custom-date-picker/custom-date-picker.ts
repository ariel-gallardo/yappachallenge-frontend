import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'custom-date-picker',
  templateUrl: './custom-date-picker.html',
  standalone: false
})
export class CustomDatePicker implements OnInit {
  @Input() control!: FormControl<string>;
  @Input() format: string = 'dd/MM/yyyy';

  displayDate: Date | null = null;

  ngOnInit() {
    if (this.control.value) {
      this.displayDate = this.parseStringToDate(this.control.value);
    }
  }

  onDateChange(date: Date | null) {
    if (date) {
      this.displayDate = date;
      const formatted = formatDate(date, this.format, 'en-US');
      this.control.setValue(formatted);
    } else {
      this.displayDate = null;
      this.control.setValue('');
    }
  }

  private parseStringToDate(value: string): Date | null {
    const parts = value.split('/');
    if (parts.length === 3) {
      const day = +parts[0];
      const month = +parts[1] - 1;
      const year = +parts[2];
      return new Date(year, month, day);
    }
    return null;
  }
}
