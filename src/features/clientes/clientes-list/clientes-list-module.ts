import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClientesList } from './clientes-list';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '@features/shared/shared-module';


@NgModule({
  providers: [provideNativeDateAdapter()],
  declarations: [ClientesList],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    RouterModule.forChild([
      {component: ClientesList, path: ''}
    ])
  ],
})
export class ClientesListModule { }
