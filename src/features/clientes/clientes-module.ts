import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesReduxModule } from '@api/client/redux/clientes/clientes.module';
import { RouterModule } from '@angular/router';
import Routes from './routes';
import { ClientShell } from './client-shell/client-shell';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ClientShell
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    ClientesReduxModule,
    NgxMaskDirective,
    NgxMaskPipe,
    RouterModule.forChild(Routes)
  ]
})
export class ClientesModule { }
