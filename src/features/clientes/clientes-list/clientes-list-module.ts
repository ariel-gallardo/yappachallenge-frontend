import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClientesList } from './clientes-list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ClientesList],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule.forChild([
      {component: ClientesList, path: ''}
    ])
  ],
})
export class ClientesListModule { }
