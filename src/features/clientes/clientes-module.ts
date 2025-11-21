import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesReduxModule } from '@api/client/redux/clientes/clientes.module';
import { RouterModule } from '@angular/router';
import Routes from './routes';
import { ClientShell } from './client-shell/client-shell';

@NgModule({
  declarations: [
    ClientShell
  ],
  imports: [
    CommonModule,
    ClientesReduxModule,
    RouterModule.forChild(Routes)
  ]
})
export class ClientesModule { }
