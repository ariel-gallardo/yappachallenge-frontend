import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesEdit } from './clientes-edit';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ClientesEdit],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {component: ClientesEdit, path: ''}
    ])
  ]
})
export class ClientesEditModule { }
