import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesEdit } from './clientes-edit';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '@features/shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatAnchor } from "@angular/material/button";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ClientesEdit],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    RouterModule.forChild([
        { component: ClientesEdit, path: '' }
    ]),
    MatAnchor
]
})
export class ClientesEditModule { }
