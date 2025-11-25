import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesCreate } from './clientes-create';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@features/shared/shared-module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ClientesCreate],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    RouterModule.forChild([
        { component: ClientesCreate, path: '' }
    ]),
  ]
})
export class ClientesCreateModule { }
