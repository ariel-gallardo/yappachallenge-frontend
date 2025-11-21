import { Action, createReducer, on } from '@ngrx/store';
import { ClientesActions as Actions } from './clientes.actions';
import State from './clientes.state';
import {Pagination} from '@api/client/models/common/pagination.model';

import { BaseResponse } from '@api/client/models/base-response.model';
import { Client } from '@api/client/models/client.model';
import { ValidationError } from '@api/client/models/validation-error.model';

const initialState = {
    clientClientesDelete: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        
    },
    clientClientesFiltersFirstGet: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: {} as Client
    },
    clientClientesFiltersGet: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client> 
    },
    clientClientesGet: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: {} as Client
    },
    clientClientesIdsGet: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client> 
    },
    clientClientesPost: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: {} as Client
    },
    clientClientesPut: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data: {} as Client
    },
    clientClientesRangeDelete: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        
    },
    clientClientesRangePost: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client> 
    },
    clientClientesRangePut: {
        hasError: false,
        isLoaded: false,
        errors: Array.of<ValidationError>(),
        data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client> 
    },
} as State;

const reducer = createReducer<State>(
  initialState,
    on(Actions.clientClientesDeleteInit, state => ({...state, clientClientesDelete:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>()}})),
    
    on(Actions.clientClientesDeleteSetError, (state,{errors}) => ({ ...state, clientClientesDelete: {errors: errors, isLoaded: false, hasError: true }})),
    // @ts-ignore
    on(Actions.clientClientesDeleteSuccess, (state) => ({ ...state, clientClientesDelete: {data: state?.clientClientesDelete?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
    on(Actions.clientClientesFiltersFirstGetInit, state => ({...state, clientClientesFiltersFirstGet:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>(), data: {} as Client}})),
    on(Actions.clientClientesFiltersFirstGetSetData, (state,{data}) => ({ ...state, clientClientesFiltersFirstGet: {data: data, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.clientClientesFiltersFirstGetSetError, (state,{errors}) => ({ ...state, clientClientesFiltersFirstGet: {errors: errors, isLoaded: false, hasError: true, data: {} as Client }})),
    // @ts-ignore
    on(Actions.clientClientesFiltersFirstGetSuccess, (state) => ({ ...state, clientClientesFiltersFirstGet: {data: state?.clientClientesFiltersFirstGet?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
    on(Actions.clientClientesFiltersGetInit, state => ({...state, clientClientesFiltersGet:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>(), data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client> }})),
    on(Actions.clientClientesFiltersGetSetData, (state,{data}) => ({ ...state, clientClientesFiltersGet: {data: data, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.clientClientesFiltersGetSetError, (state,{errors}) => ({ ...state, clientClientesFiltersGet: {errors: errors, isLoaded: false, hasError: true, data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client>  }})),
    // @ts-ignore
    on(Actions.clientClientesFiltersGetSuccess, (state) => ({ ...state, clientClientesFiltersGet: {data: state?.clientClientesFiltersGet?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
    on(Actions.clientClientesGetInit, state => ({...state, clientClientesGet:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>(), data: {} as Client}})),
    on(Actions.clientClientesGetSetData, (state,{data}) => ({ ...state, clientClientesGet: {data: data, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.clientClientesGetSetError, (state,{errors}) => ({ ...state, clientClientesGet: {errors: errors, isLoaded: false, hasError: true, data: {} as Client }})),
    // @ts-ignore
    on(Actions.clientClientesGetSuccess, (state) => ({ ...state, clientClientesGet: {data: state?.clientClientesGet?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
    on(Actions.clientClientesIdsGetInit, state => ({...state, clientClientesIdsGet:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>(), data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client> }})),
    on(Actions.clientClientesIdsGetSetData, (state,{data}) => ({ ...state, clientClientesIdsGet: {data: data, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.clientClientesIdsGetSetError, (state,{errors}) => ({ ...state, clientClientesIdsGet: {errors: errors, isLoaded: false, hasError: true, data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client>  }})),
    // @ts-ignore
    on(Actions.clientClientesIdsGetSuccess, (state) => ({ ...state, clientClientesIdsGet: {data: state?.clientClientesIdsGet?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
    on(Actions.clientClientesPostInit, state => ({...state, clientClientesPost:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>(), data: {} as Client}})),
    on(Actions.clientClientesPostSetData, (state,{data}) => ({ ...state, clientClientesPost: {data: data, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.clientClientesPostSetError, (state,{errors}) => ({ ...state, clientClientesPost: {errors: errors, isLoaded: false, hasError: true, data: {} as Client }})),
    // @ts-ignore
    on(Actions.clientClientesPostSuccess, (state) => ({ ...state, clientClientesPost: {data: state?.clientClientesPost?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
    on(Actions.clientClientesPutInit, state => ({...state, clientClientesPut:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>(), data: {} as Client}})),
    on(Actions.clientClientesPutSetData, (state,{data}) => ({ ...state, clientClientesPut: {data: data, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.clientClientesPutSetError, (state,{errors}) => ({ ...state, clientClientesPut: {errors: errors, isLoaded: false, hasError: true, data: {} as Client }})),
    // @ts-ignore
    on(Actions.clientClientesPutSuccess, (state) => ({ ...state, clientClientesPut: {data: state?.clientClientesPut?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
    on(Actions.clientClientesRangeDeleteInit, state => ({...state, clientClientesRangeDelete:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>()}})),
    
    on(Actions.clientClientesRangeDeleteSetError, (state,{errors}) => ({ ...state, clientClientesRangeDelete: {errors: errors, isLoaded: false, hasError: true }})),
    // @ts-ignore
    on(Actions.clientClientesRangeDeleteSuccess, (state) => ({ ...state, clientClientesRangeDelete: {data: state?.clientClientesRangeDelete?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
    on(Actions.clientClientesRangePostInit, state => ({...state, clientClientesRangePost:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>(), data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client> }})),
    on(Actions.clientClientesRangePostSetData, (state,{data}) => ({ ...state, clientClientesRangePost: {data: data, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.clientClientesRangePostSetError, (state,{errors}) => ({ ...state, clientClientesRangePost: {errors: errors, isLoaded: false, hasError: true, data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client>  }})),
    // @ts-ignore
    on(Actions.clientClientesRangePostSuccess, (state) => ({ ...state, clientClientesRangePost: {data: state?.clientClientesRangePost?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
    on(Actions.clientClientesRangePutInit, state => ({...state, clientClientesRangePut:{hasError: false,isLoaded: false,errors: Array.of<ValidationError>(), data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client> }})),
    on(Actions.clientClientesRangePutSetData, (state,{data}) => ({ ...state, clientClientesRangePut: {data: data, isLoaded: true, hasError: false, errors: [] }})),
    on(Actions.clientClientesRangePutSetError, (state,{errors}) => ({ ...state, clientClientesRangePut: {errors: errors, isLoaded: false, hasError: true, data:  {currentPage: 0,totalPages: 0,pageSize: 0,totalCount: 0} as Pagination<Client>  }})),
    // @ts-ignore
    on(Actions.clientClientesRangePutSuccess, (state) => ({ ...state, clientClientesRangePut: {data: state?.clientClientesRangePut?.data, errors: Array.of<ValidationError>(), isLoaded: true, hasError: false }})),
);

export default function currentReducer(
  state: State,
  action: Action
) {
  return reducer(state, action);
}