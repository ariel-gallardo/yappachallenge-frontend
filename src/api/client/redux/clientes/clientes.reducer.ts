import { Action, createReducer, on } from '@ngrx/store';
import { ClientesActions as Actions } from './clientes.actions';
import State from './clientes.state';
import {Pagination} from '@api/client/models/common/pagination.model';
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

const initialState = {
    Delete: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        
        request: {
            entityId: undefined,
        } as DeleteRequest,
    },
    FiltersFirstGet: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: {  } as Client,
        request: {
            nombre: undefined,
            apellido: undefined,
            razonSocial: undefined,
            cuit: undefined,
            fechaNacimientoMin: undefined,
            fechaNacimientoMax: undefined,
            telefonoCelular: undefined,
            email: undefined,
            orderBy: undefined,
        } as FiltersFirstGetRequest,
    },
    FiltersGet: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>,
        request: {
            nombre: undefined,
            apellido: undefined,
            razonSocial: undefined,
            cuit: undefined,
            fechaNacimientoMin: undefined,
            fechaNacimientoMax: undefined,
            telefonoCelular: undefined,
            email: undefined,
            orderBy: undefined,
            page: undefined,
            pageSize: undefined,
        } as FiltersGetRequest,
    },
    Get: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: {  } as Client,
        request: {
            entityId: undefined,
        } as GetRequest,
    },
    IdsGet: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>,
        request: {
            entityIds: [],
            page: undefined,
            pageSize: undefined,
        } as IdsGetRequest,
    },
    Post: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: {  } as Client,
        request: {
            client: {},
        } as PostRequest,
    },
    Put: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: {  } as Client,
        request: {
            client: {},
        } as PutRequest,
    },
    RangeDelete: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        
        request: {
            requestBody: [],
        } as RangeDeleteRequest,
    },
    RangePost: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>,
        request: {
            client2: [],
        } as RangePostRequest,
    },
    RangePut: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>,
        request: {
            client2: [],
        } as RangePutRequest,
    },
} as State;

const reducer = createReducer<State>(
  initialState,
    // @ts-ignore
    on(Actions.DeleteInit, state => ({...state, Delete:{ ...state.Delete, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false}})),
    
    // @ts-ignore
    
    // @ts-ignore
    on(Actions.DeleteSetError, (state,{errors}) => ({ ...state, Delete: {...state.Delete, isLoaded: false, hasError: true }})),
    // @ts-ignore
    on(Actions.DeleteSuccess, (state) => ({ ...state, Delete: {...state.Delete, data: state?.Delete?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.DeleteRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Delete: {...state.Delete, ...state.Delete ,request: {...state.Delete.request, [key]:value} }})),
    on(Actions.DeleteRequestUpdateSuccess, (state, {request}) => ({ ...state, Delete: {...state.Delete, ...state.Delete ,request: request }})),
    // @ts-ignore
    on(Actions.FiltersFirstGetInit, state => ({...state, FiltersFirstGet:{ ...state.FiltersFirstGet, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false, data: {  } as Client }})),
    on(Actions.FiltersFirstGetDataInit, state => ({...state, FiltersFirstGet:{ ...state.FiltersFirstGet, data: {  } as Client}})),
    // @ts-ignore
    on(Actions.FiltersFirstGetSetData, (state, {data}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, data: data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.FiltersFirstGetSetError, (state,{errors}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, isLoaded: false, hasError: true,errors: errors, data: {  } as Client  }})),
    // @ts-ignore
    on(Actions.FiltersFirstGetSuccess, (state) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, data: state?.FiltersFirstGet?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.FiltersFirstGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, ...state.FiltersFirstGet ,request: {...state.FiltersFirstGet.request, [key]:value} }})),
    on(Actions.FiltersFirstGetRequestUpdateSuccess, (state, {request}) => ({ ...state, FiltersFirstGet: {...state.FiltersFirstGet, ...state.FiltersFirstGet ,request: request }})),
    // @ts-ignore
    on(Actions.FiltersGetInit, state => ({...state, FiltersGet:{ ...state.FiltersGet, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client> }})),
    on(Actions.FiltersGetDataInit, state => ({...state, FiltersGet:{ ...state.FiltersGet, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>}})),
    // @ts-ignore
    on(Actions.FiltersGetSetData, (state, {data}) => ({ ...state, FiltersGet: {...state.FiltersGet, data: data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.FiltersGetSetError, (state,{errors}) => ({ ...state, FiltersGet: {...state.FiltersGet, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>  }})),
    // @ts-ignore
    on(Actions.FiltersGetSuccess, (state) => ({ ...state, FiltersGet: {...state.FiltersGet, data: state?.FiltersGet?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.FiltersGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, FiltersGet: {...state.FiltersGet, ...state.FiltersGet ,request: {...state.FiltersGet.request, [key]:value} }})),
    on(Actions.FiltersGetRequestUpdateSuccess, (state, {request}) => ({ ...state, FiltersGet: {...state.FiltersGet, ...state.FiltersGet ,request: request }})),
    // @ts-ignore
    on(Actions.GetInit, state => ({...state, Get:{ ...state.Get, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false, data: {  } as Client }})),
    on(Actions.GetDataInit, state => ({...state, Get:{ ...state.Get, data: {  } as Client}})),
    // @ts-ignore
    on(Actions.GetSetData, (state, {data}) => ({ ...state, Get: {...state.Get, data: data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.GetSetError, (state,{errors}) => ({ ...state, Get: {...state.Get, isLoaded: false, hasError: true,errors: errors, data: {  } as Client  }})),
    // @ts-ignore
    on(Actions.GetSuccess, (state) => ({ ...state, Get: {...state.Get, data: state?.Get?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.GetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Get: {...state.Get, ...state.Get ,request: {...state.Get.request, [key]:value} }})),
    on(Actions.GetRequestUpdateSuccess, (state, {request}) => ({ ...state, Get: {...state.Get, ...state.Get ,request: request }})),
    // @ts-ignore
    on(Actions.IdsGetInit, state => ({...state, IdsGet:{ ...state.IdsGet, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client> }})),
    on(Actions.IdsGetDataInit, state => ({...state, IdsGet:{ ...state.IdsGet, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>}})),
    // @ts-ignore
    on(Actions.IdsGetSetData, (state, {data}) => ({ ...state, IdsGet: {...state.IdsGet, data: data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.IdsGetSetError, (state,{errors}) => ({ ...state, IdsGet: {...state.IdsGet, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>  }})),
    // @ts-ignore
    on(Actions.IdsGetSuccess, (state) => ({ ...state, IdsGet: {...state.IdsGet, data: state?.IdsGet?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.IdsGetRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, IdsGet: {...state.IdsGet, ...state.IdsGet ,request: {...state.IdsGet.request, [key]:value} }})),
    on(Actions.IdsGetRequestUpdateSuccess, (state, {request}) => ({ ...state, IdsGet: {...state.IdsGet, ...state.IdsGet ,request: request }})),
    // @ts-ignore
    on(Actions.PostInit, state => ({...state, Post:{ ...state.Post, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false, data: {  } as Client }})),
    on(Actions.PostDataInit, state => ({...state, Post:{ ...state.Post, data: {  } as Client}})),
    // @ts-ignore
    on(Actions.PostSetData, (state, {data}) => ({ ...state, Post: {...state.Post, data: data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.PostSetError, (state,{errors}) => ({ ...state, Post: {...state.Post, isLoaded: false, hasError: true,errors: errors, data: {  } as Client  }})),
    // @ts-ignore
    on(Actions.PostSuccess, (state) => ({ ...state, Post: {...state.Post, data: state?.Post?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.PostRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Post: {...state.Post, ...state.Post ,request: {...state.Post.request, [key]:value} }})),
    on(Actions.PostRequestUpdateSuccess, (state, {request}) => ({ ...state, Post: {...state.Post, ...state.Post ,request: request }})),
    // @ts-ignore
    on(Actions.PutInit, state => ({...state, Put:{ ...state.Put, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false, data: {  } as Client }})),
    on(Actions.PutDataInit, state => ({...state, Put:{ ...state.Put, data: {  } as Client}})),
    // @ts-ignore
    on(Actions.PutSetData, (state, {data}) => ({ ...state, Put: {...state.Put, data: data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.PutSetError, (state,{errors}) => ({ ...state, Put: {...state.Put, isLoaded: false, hasError: true,errors: errors, data: {  } as Client  }})),
    // @ts-ignore
    on(Actions.PutSuccess, (state) => ({ ...state, Put: {...state.Put, data: state?.Put?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.PutRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, Put: {...state.Put, ...state.Put ,request: {...state.Put.request, [key]:value} }})),
    on(Actions.PutRequestUpdateSuccess, (state, {request}) => ({ ...state, Put: {...state.Put, ...state.Put ,request: request }})),
    // @ts-ignore
    on(Actions.RangeDeleteInit, state => ({...state, RangeDelete:{ ...state.RangeDelete, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false}})),
    
    // @ts-ignore
    
    // @ts-ignore
    on(Actions.RangeDeleteSetError, (state,{errors}) => ({ ...state, RangeDelete: {...state.RangeDelete, isLoaded: false, hasError: true }})),
    // @ts-ignore
    on(Actions.RangeDeleteSuccess, (state) => ({ ...state, RangeDelete: {...state.RangeDelete, data: state?.RangeDelete?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.RangeDeleteRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangeDelete: {...state.RangeDelete, ...state.RangeDelete ,request: {...state.RangeDelete.request, [key]:value} }})),
    on(Actions.RangeDeleteRequestUpdateSuccess, (state, {request}) => ({ ...state, RangeDelete: {...state.RangeDelete, ...state.RangeDelete ,request: request }})),
    // @ts-ignore
    on(Actions.RangePostInit, state => ({...state, RangePost:{ ...state.RangePost, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client> }})),
    on(Actions.RangePostDataInit, state => ({...state, RangePost:{ ...state.RangePost, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>}})),
    // @ts-ignore
    on(Actions.RangePostSetData, (state, {data}) => ({ ...state, RangePost: {...state.RangePost, data: data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.RangePostSetError, (state,{errors}) => ({ ...state, RangePost: {...state.RangePost, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>  }})),
    // @ts-ignore
    on(Actions.RangePostSuccess, (state) => ({ ...state, RangePost: {...state.RangePost, data: state?.RangePost?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.RangePostRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangePost: {...state.RangePost, ...state.RangePost ,request: {...state.RangePost.request, [key]:value} }})),
    on(Actions.RangePostRequestUpdateSuccess, (state, {request}) => ({ ...state, RangePost: {...state.RangePost, ...state.RangePost ,request: request }})),
    // @ts-ignore
    on(Actions.RangePutInit, state => ({...state, RangePut:{ ...state.RangePut, hasError: false, errors: Array.of<ValidationError>(),  isLoaded: false, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client> }})),
    on(Actions.RangePutDataInit, state => ({...state, RangePut:{ ...state.RangePut, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>}})),
    // @ts-ignore
    on(Actions.RangePutSetData, (state, {data}) => ({ ...state, RangePut: {...state.RangePut, data: data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.RangePutSetError, (state,{errors}) => ({ ...state, RangePut: {...state.RangePut, isLoaded: false, hasError: true,errors: errors, data: { currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0, items: [] } as Pagination<Client>  }})),
    // @ts-ignore
    on(Actions.RangePutSuccess, (state) => ({ ...state, RangePut: {...state.RangePut, data: state?.RangePut?.data, isLoaded: true, hasError: false, errors: Array.of<ValidationError>() }})),
    // @ts-ignore
    on(Actions.RangePutRequestUpdateOneSuccess, (state, {key, value}) => ({ ...state, RangePut: {...state.RangePut, ...state.RangePut ,request: {...state.RangePut.request, [key]:value} }})),
    on(Actions.RangePutRequestUpdateSuccess, (state, {request}) => ({ ...state, RangePut: {...state.RangePut, ...state.RangePut ,request: request }})),
);

export default function currentReducer(
  state: State,
  action: Action
) {
  return reducer(state, action);
}