import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List } from './list/list';
import {MatTableModule} from '@angular/material/table';
import { ClientesReduxModule } from '@api/client/redux/clientes/clientes.module';
import { RouterModule } from '@angular/router';
import Routes from './routes';

@NgModule({
  declarations: [
    List
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ClientesReduxModule,
    RouterModule.forChild(Routes)
  ]
})
export class ClientesModule { }
