import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ClientesActions as Actions } from './clientes.actions';
import {Pagination} from '../../models/common/pagination.model';
import State from './clientes.state';


import { BaseResponse } from '@api/client/models/base-response.model'; 
import { Client } from '@api/client/models/client.model'; 
import { ValidationError } from '@api/client/models/validation-error.model'; 
import { clientClientesDeleteRequest } from '@api/client/services/clientes.service'; 
import { clientClientesFiltersFirstGetRequest } from '@api/client/services/clientes.service'; 
import { clientClientesFiltersGetRequest } from '@api/client/services/clientes.service'; 
import { clientClientesGetRequest } from '@api/client/services/clientes.service'; 
import { clientClientesIdsGetRequest } from '@api/client/services/clientes.service'; 
import { clientClientesPostRequest } from '@api/client/services/clientes.service'; 
import { clientClientesPutRequest } from '@api/client/services/clientes.service'; 
import { clientClientesRangeDeleteRequest } from '@api/client/services/clientes.service'; 
import { clientClientesRangePostRequest } from '@api/client/services/clientes.service'; 
import { clientClientesRangePutRequest } from '@api/client/services/clientes.service'; 

@Injectable()
export class ClientesFacade {
  constructor(private store: Store<{ Clientes: State }>) {}
  
  Init(){
    this.store.dispatch(Actions.Init());
  }

  get clientClientesDeleteIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesDelete.isLoaded); }
  
  get clientClientesDeleteError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesDelete.errors); }
  get clientClientesDeleteHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesDelete.hasError); }
  clientClientesDelete(data: clientClientesDeleteRequest){
    this.store.dispatch(Actions.clientClientesDeleteExecute(data));
  }
  get clientClientesFiltersFirstGetIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesFiltersFirstGet.isLoaded); }
  get clientClientesFiltersFirstGet$(): Observable<Client> { return this.store.select(state => state.Clientes.clientClientesFiltersFirstGet.data); }
  get clientClientesFiltersFirstGetError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesFiltersFirstGet.errors); }
  get clientClientesFiltersFirstGetHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesFiltersFirstGet.hasError); }
  clientClientesFiltersFirstGet(data: clientClientesFiltersFirstGetRequest){
    this.store.dispatch(Actions.clientClientesFiltersFirstGetExecute(data));
  }
  get clientClientesFiltersGetIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesFiltersGet.isLoaded); }
  get clientClientesFiltersGet$(): Observable<Pagination<Client>> { return this.store.select(state => state.Clientes.clientClientesFiltersGet.data); }
  get clientClientesFiltersGetError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesFiltersGet.errors); }
  get clientClientesFiltersGetHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesFiltersGet.hasError); }
  clientClientesFiltersGet(data: clientClientesFiltersGetRequest){
    this.store.dispatch(Actions.clientClientesFiltersGetExecute(data));
  }
  get clientClientesGetIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesGet.isLoaded); }
  get clientClientesGet$(): Observable<Client> { return this.store.select(state => state.Clientes.clientClientesGet.data); }
  get clientClientesGetError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesGet.errors); }
  get clientClientesGetHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesGet.hasError); }
  clientClientesGet(data: clientClientesGetRequest){
    this.store.dispatch(Actions.clientClientesGetExecute(data));
  }
  get clientClientesIdsGetIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesIdsGet.isLoaded); }
  get clientClientesIdsGet$(): Observable<Pagination<Client>> { return this.store.select(state => state.Clientes.clientClientesIdsGet.data); }
  get clientClientesIdsGetError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesIdsGet.errors); }
  get clientClientesIdsGetHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesIdsGet.hasError); }
  clientClientesIdsGet(data: clientClientesIdsGetRequest){
    this.store.dispatch(Actions.clientClientesIdsGetExecute(data));
  }
  get clientClientesPostIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesPost.isLoaded); }
  get clientClientesPost$(): Observable<Client> { return this.store.select(state => state.Clientes.clientClientesPost.data); }
  get clientClientesPostError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesPost.errors); }
  get clientClientesPostHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesPost.hasError); }
  clientClientesPost(data: clientClientesPostRequest){
    this.store.dispatch(Actions.clientClientesPostExecute(data));
  }
  get clientClientesPutIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesPut.isLoaded); }
  get clientClientesPut$(): Observable<Client> { return this.store.select(state => state.Clientes.clientClientesPut.data); }
  get clientClientesPutError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesPut.errors); }
  get clientClientesPutHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesPut.hasError); }
  clientClientesPut(data: clientClientesPutRequest){
    this.store.dispatch(Actions.clientClientesPutExecute(data));
  }
  get clientClientesRangeDeleteIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesRangeDelete.isLoaded); }
  
  get clientClientesRangeDeleteError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesRangeDelete.errors); }
  get clientClientesRangeDeleteHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesRangeDelete.hasError); }
  clientClientesRangeDelete(data: clientClientesRangeDeleteRequest){
    this.store.dispatch(Actions.clientClientesRangeDeleteExecute(data));
  }
  get clientClientesRangePostIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesRangePost.isLoaded); }
  get clientClientesRangePost$(): Observable<Pagination<Client>> { return this.store.select(state => state.Clientes.clientClientesRangePost.data); }
  get clientClientesRangePostError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesRangePost.errors); }
  get clientClientesRangePostHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesRangePost.hasError); }
  clientClientesRangePost(data: clientClientesRangePostRequest){
    this.store.dispatch(Actions.clientClientesRangePostExecute(data));
  }
  get clientClientesRangePutIsLoaded$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesRangePut.isLoaded); }
  get clientClientesRangePut$(): Observable<Pagination<Client>> { return this.store.select(state => state.Clientes.clientClientesRangePut.data); }
  get clientClientesRangePutError$(): Observable<ValidationError[]> { return this.store.select(state => state.Clientes.clientClientesRangePut.errors); }
  get clientClientesRangePutHasError$(): Observable<boolean> { return this.store.select(state => state.Clientes.clientClientesRangePut.hasError); }
  clientClientesRangePut(data: clientClientesRangePutRequest){
    this.store.dispatch(Actions.clientClientesRangePutExecute(data));
  }

}
