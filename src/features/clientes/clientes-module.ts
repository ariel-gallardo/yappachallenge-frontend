import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesReduxModule } from '@api/client/redux/clientes/clientes.module';
import { RouterModule } from '@angular/router';
import Routes from './routes';
import { ClientShell } from './client-shell/client-shell';
import { ClientesEdit } from './clientes-edit/clientes-edit';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@NgModule({
  declarations: [
    ClientShell,
    ClientesEdit
  ],
  imports: [
    CommonModule,
    ClientesReduxModule,
    NgxMaskDirective,
    NgxMaskPipe,
    RouterModule.forChild(Routes)
  ]
})
export class ClientesModule { }
