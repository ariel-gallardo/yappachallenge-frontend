import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'message',
  standalone: false,
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message implements OnInit {

  text = '';
  status = 200;

  icon = 'info';
  bgClass = 'bg-slate-600';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit() {
    this.text = this.data?.message ?? 'Operación realizada';
    this.status = this.data?.status ?? 200;
    this.mapStatus(this.status);
  }

  private mapStatus(status: number) {

    if (status >= 200 && status <= 201) {
      this.icon = 'check_circle';
      this.bgClass = 'bg-green-600';
    }
    else if (status >= 202 && status < 300) {
      this.icon = 'check';
      this.bgClass = 'bg-blue-600';
    }
    else if (status >= 400 && status < 500) {
      this.icon = 'warning';
      this.bgClass = 'bg-yellow-600 text-black';
    }
    else if (status >= 500) {
      this.icon = 'error';
      this.bgClass = 'bg-red-600';
    }
    else {
      this.icon = 'info';
      this.bgClass = 'bg-slate-600';
    }
  }
}
