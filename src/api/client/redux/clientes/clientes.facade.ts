import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ClientesActions as Actions } from './clientes.actions';
import {Pagination} from '../../models/common/pagination.model';
import State from './clientes.state';
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';

import { BaseResponse } from '@api/client/models/base-response.model'; 
import { Client } from '@api/client/models/client.model'; 
import { Client2 } from '@api/client/models/client2.model'; 
import { ValidationError } from '@api/client/models/validation-error.model'; 
import { DeleteRequest } from '@api/client/services/clientes.service'; 
import { FiltersFirstGetRequest } from '@api/client/services/clientes.service'; 
import { FiltersGetRequest } from '@api/client/services/clientes.service'; 
import { GetRequest } from '@api/client/services/clientes.service'; 
import { IdsGetRequest } from '@api/client/services/clientes.service'; 
import { PostRequest } from '@api/client/services/clientes.service'; 
import { PutRequest } from '@api/client/services/clientes.service'; 
import { RangeDeleteRequest } from '@api/client/services/clientes.service'; 
import { RangePostRequest } from '@api/client/services/clientes.service'; 
import { RangePutRequest } from '@api/client/services/clientes.service'; 
import { selectDeleteRequest } from './clientes.selector';

import { selectDeleteHasError } from './clientes.selector';
import { selectDeleteErrors } from './clientes.selector';
import { selectDeleteLoaded } from './clientes.selector';
import { selectFiltersFirstGetRequest } from './clientes.selector';
import { selectFiltersFirstGetData } from './clientes.selector';
import { selectFiltersFirstGetHasError } from './clientes.selector';
import { selectFiltersFirstGetErrors } from './clientes.selector';
import { selectFiltersFirstGetLoaded } from './clientes.selector';
import { selectFiltersGetRequest } from './clientes.selector';
import { selectFiltersGetData } from './clientes.selector';
import { selectFiltersGetHasError } from './clientes.selector';
import { selectFiltersGetErrors } from './clientes.selector';
import { selectFiltersGetLoaded } from './clientes.selector';
import { selectGetRequest } from './clientes.selector';
import { selectGetData } from './clientes.selector';
import { selectGetHasError } from './clientes.selector';
import { selectGetErrors } from './clientes.selector';
import { selectGetLoaded } from './clientes.selector';
import { selectIdsGetRequest } from './clientes.selector';
import { selectIdsGetData } from './clientes.selector';
import { selectIdsGetHasError } from './clientes.selector';
import { selectIdsGetErrors } from './clientes.selector';
import { selectIdsGetLoaded } from './clientes.selector';
import { selectPostRequest } from './clientes.selector';
import { selectPostData } from './clientes.selector';
import { selectPostHasError } from './clientes.selector';
import { selectPostErrors } from './clientes.selector';
import { selectPostLoaded } from './clientes.selector';
import { selectPutRequest } from './clientes.selector';
import { selectPutData } from './clientes.selector';
import { selectPutHasError } from './clientes.selector';
import { selectPutErrors } from './clientes.selector';
import { selectPutLoaded } from './clientes.selector';
import { selectRangeDeleteRequest } from './clientes.selector';

import { selectRangeDeleteHasError } from './clientes.selector';
import { selectRangeDeleteErrors } from './clientes.selector';
import { selectRangeDeleteLoaded } from './clientes.selector';
import { selectRangePostRequest } from './clientes.selector';
import { selectRangePostData } from './clientes.selector';
import { selectRangePostHasError } from './clientes.selector';
import { selectRangePostErrors } from './clientes.selector';
import { selectRangePostLoaded } from './clientes.selector';
import { selectRangePutRequest } from './clientes.selector';
import { selectRangePutData } from './clientes.selector';
import { selectRangePutHasError } from './clientes.selector';
import { selectRangePutErrors } from './clientes.selector';
import { selectRangePutLoaded } from './clientes.selector';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class ClientesFacade {
  constructor(private store: Store<{ Clientes: State }>) {}
  
  Init(){
    this.store.dispatch(Actions.Init());
  }

  public get DeleteIsLoaded$(): Observable<boolean> { return this.store.select(selectDeleteLoaded); }
  
  public get DeleteHasError$(): Observable<boolean> { return this.store.select(selectDeleteHasError); }
  public get DeleteErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectDeleteErrors); }
  public get DeleteRequest$(): Observable<DeleteRequest> { return this.store.select(selectDeleteRequest); }
  public Delete(){
    this.store.dispatch(Actions.DeleteExecute());
  }
  public DeleteRequestUpdate(request: DeleteRequest){
    this.store.dispatch(Actions.DeleteRequestUpdate({request}));
  }
  public DeleteRequestUpdateOne(request: DeleteRequest){
    this.store.dispatch(Actions.DeleteRequestUpdateOne({request}));
  }
  public DeleteInit(){
    this.store.dispatch(Actions.DeleteInit());
  }
  public get FiltersFirstGetIsLoaded$(): Observable<boolean> { return this.store.select(selectFiltersFirstGetLoaded); }
  public get FiltersFirstGet$(): Observable<Client> { return this.store.select(selectFiltersFirstGetData); }
  public get FiltersFirstGetHasError$(): Observable<boolean> { return this.store.select(selectFiltersFirstGetHasError); }
  public get FiltersFirstGetErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectFiltersFirstGetErrors); }
  public get FiltersFirstGetRequest$(): Observable<FiltersFirstGetRequest> { return this.store.select(selectFiltersFirstGetRequest); }
  public FiltersFirstGet(){
    this.store.dispatch(Actions.FiltersFirstGetExecute());
  }
  public FiltersFirstGetRequestUpdate(request: FiltersFirstGetRequest){
    this.store.dispatch(Actions.FiltersFirstGetRequestUpdate({request}));
  }
  public FiltersFirstGetRequestUpdateOne(request: FiltersFirstGetRequest){
    this.store.dispatch(Actions.FiltersFirstGetRequestUpdateOne({request}));
  }
  public FiltersFirstGetInit(){
    this.store.dispatch(Actions.FiltersFirstGetInit());
  }
  public get FiltersGetIsLoaded$(): Observable<boolean> { return this.store.select(selectFiltersGetLoaded); }
  public get FiltersGet$(): Observable<Pagination<Client>> { return this.store.select(selectFiltersGetData); }
  public get FiltersGetHasError$(): Observable<boolean> { return this.store.select(selectFiltersGetHasError); }
  public get FiltersGetErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectFiltersGetErrors); }
  public get FiltersGetRequest$(): Observable<FiltersGetRequest> { return this.store.select(selectFiltersGetRequest); }
  public FiltersGet(){
    this.store.dispatch(Actions.FiltersGetExecute());
  }
  public FiltersGetRequestUpdate(request: FiltersGetRequest){
    this.store.dispatch(Actions.FiltersGetRequestUpdate({request}));
  }
  public FiltersGetRequestUpdateOne(request: FiltersGetRequest){
    this.store.dispatch(Actions.FiltersGetRequestUpdateOne({request}));
  }
  
  public FiltersGetChangePage(event: PageEvent) {
    this.store.dispatch(Actions.FiltersGetChangePage({ event }));
  }
  public FiltersGetInit(){
    this.store.dispatch(Actions.FiltersGetInit());
  }
  public get GetIsLoaded$(): Observable<boolean> { return this.store.select(selectGetLoaded); }
  public get Get$(): Observable<Client> { return this.store.select(selectGetData); }
  public get GetHasError$(): Observable<boolean> { return this.store.select(selectGetHasError); }
  public get GetErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectGetErrors); }
  public get GetRequest$(): Observable<GetRequest> { return this.store.select(selectGetRequest); }
  public Get(){
    this.store.dispatch(Actions.GetExecute());
  }
  public GetRequestUpdate(request: GetRequest){
    this.store.dispatch(Actions.GetRequestUpdate({request}));
  }
  public GetRequestUpdateOne(request: GetRequest){
    this.store.dispatch(Actions.GetRequestUpdateOne({request}));
  }
  public GetInit(){
    this.store.dispatch(Actions.GetInit());
  }
  public get IdsGetIsLoaded$(): Observable<boolean> { return this.store.select(selectIdsGetLoaded); }
  public get IdsGet$(): Observable<Pagination<Client>> { return this.store.select(selectIdsGetData); }
  public get IdsGetHasError$(): Observable<boolean> { return this.store.select(selectIdsGetHasError); }
  public get IdsGetErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectIdsGetErrors); }
  public get IdsGetRequest$(): Observable<IdsGetRequest> { return this.store.select(selectIdsGetRequest); }
  public IdsGet(){
    this.store.dispatch(Actions.IdsGetExecute());
  }
  public IdsGetRequestUpdate(request: IdsGetRequest){
    this.store.dispatch(Actions.IdsGetRequestUpdate({request}));
  }
  public IdsGetRequestUpdateOne(request: IdsGetRequest){
    this.store.dispatch(Actions.IdsGetRequestUpdateOne({request}));
  }
  
  public IdsGetChangePage(event: PageEvent) {
    this.store.dispatch(Actions.IdsGetChangePage({ event }));
  }
  public IdsGetInit(){
    this.store.dispatch(Actions.IdsGetInit());
  }
  public get PostIsLoaded$(): Observable<boolean> { return this.store.select(selectPostLoaded); }
  public get Post$(): Observable<Client> { return this.store.select(selectPostData); }
  public get PostHasError$(): Observable<boolean> { return this.store.select(selectPostHasError); }
  public get PostErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectPostErrors); }
  public get PostRequest$(): Observable<PostRequest> { return this.store.select(selectPostRequest); }
  public Post(){
    this.store.dispatch(Actions.PostExecute());
  }
  public PostRequestUpdate(request: PostRequest){
    this.store.dispatch(Actions.PostRequestUpdate({request}));
  }
  public PostRequestUpdateOne(request: PostRequest){
    this.store.dispatch(Actions.PostRequestUpdateOne({request}));
  }
  public PostInit(){
    this.store.dispatch(Actions.PostInit());
  }
  public get PutIsLoaded$(): Observable<boolean> { return this.store.select(selectPutLoaded); }
  public get Put$(): Observable<Client> { return this.store.select(selectPutData); }
  public get PutHasError$(): Observable<boolean> { return this.store.select(selectPutHasError); }
  public get PutErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectPutErrors); }
  public get PutRequest$(): Observable<PutRequest> { return this.store.select(selectPutRequest); }
  public Put(){
    this.store.dispatch(Actions.PutExecute());
  }
  public PutRequestUpdate(request: PutRequest){
    this.store.dispatch(Actions.PutRequestUpdate({request}));
  }
  public PutRequestUpdateOne(request: PutRequest){
    this.store.dispatch(Actions.PutRequestUpdateOne({request}));
  }
  public PutInit(){
    this.store.dispatch(Actions.PutInit());
  }
  public get RangeDeleteIsLoaded$(): Observable<boolean> { return this.store.select(selectRangeDeleteLoaded); }
  
  public get RangeDeleteHasError$(): Observable<boolean> { return this.store.select(selectRangeDeleteHasError); }
  public get RangeDeleteErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectRangeDeleteErrors); }
  public get RangeDeleteRequest$(): Observable<RangeDeleteRequest> { return this.store.select(selectRangeDeleteRequest); }
  public RangeDelete(){
    this.store.dispatch(Actions.RangeDeleteExecute());
  }
  public RangeDeleteRequestUpdate(request: RangeDeleteRequest){
    this.store.dispatch(Actions.RangeDeleteRequestUpdate({request}));
  }
  public RangeDeleteRequestUpdateOne(request: RangeDeleteRequest){
    this.store.dispatch(Actions.RangeDeleteRequestUpdateOne({request}));
  }
  public RangeDeleteInit(){
    this.store.dispatch(Actions.RangeDeleteInit());
  }
  public get RangePostIsLoaded$(): Observable<boolean> { return this.store.select(selectRangePostLoaded); }
  public get RangePost$(): Observable<Pagination<Client>> { return this.store.select(selectRangePostData); }
  public get RangePostHasError$(): Observable<boolean> { return this.store.select(selectRangePostHasError); }
  public get RangePostErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectRangePostErrors); }
  public get RangePostRequest$(): Observable<RangePostRequest> { return this.store.select(selectRangePostRequest); }
  public RangePost(){
    this.store.dispatch(Actions.RangePostExecute());
  }
  public RangePostRequestUpdate(request: RangePostRequest){
    this.store.dispatch(Actions.RangePostRequestUpdate({request}));
  }
  public RangePostRequestUpdateOne(request: RangePostRequest){
    this.store.dispatch(Actions.RangePostRequestUpdateOne({request}));
  }
  
  public RangePostChangePage(event: PageEvent) {
    this.store.dispatch(Actions.RangePostChangePage({ event }));
  }
  public RangePostInit(){
    this.store.dispatch(Actions.RangePostInit());
  }
  public get RangePutIsLoaded$(): Observable<boolean> { return this.store.select(selectRangePutLoaded); }
  public get RangePut$(): Observable<Pagination<Client>> { return this.store.select(selectRangePutData); }
  public get RangePutHasError$(): Observable<boolean> { return this.store.select(selectRangePutHasError); }
  public get RangePutErrors$(): Observable<Array<ValidationError>> { return this.store.select(selectRangePutErrors); }
  public get RangePutRequest$(): Observable<RangePutRequest> { return this.store.select(selectRangePutRequest); }
  public RangePut(){
    this.store.dispatch(Actions.RangePutExecute());
  }
  public RangePutRequestUpdate(request: RangePutRequest){
    this.store.dispatch(Actions.RangePutRequestUpdate({request}));
  }
  public RangePutRequestUpdateOne(request: RangePutRequest){
    this.store.dispatch(Actions.RangePutRequestUpdateOne({request}));
  }
  
  public RangePutChangePage(event: PageEvent) {
    this.store.dispatch(Actions.RangePutChangePage({ event }));
  }
  public RangePutInit(){
    this.store.dispatch(Actions.RangePutInit());
  }

}
