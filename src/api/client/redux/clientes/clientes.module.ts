import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './clientes.reducer';
import { ClientesEffects } from './clientes.effects';
import { ClientesService } from '@api/client/services/clientes.service';
import { ClientesFacade } from './clientes.facade';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Clientes', Reducer),
    EffectsModule.forFeature([ClientesEffects])
  ],
  providers: [ClientesService, ClientesFacade]
})
export class ClientesReduxModule {

}
