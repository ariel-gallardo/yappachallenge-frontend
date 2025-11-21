import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ClientesService } from '@api/client/services/clientes.service';
import { ClientesActions } from './clientes.actions';

@Injectable(
    
)
export class ClientesEffects {
    private actions$ = inject(Actions);
    private api = inject(ClientesService);

    Init$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.Init),
        mergeMap(() => [
                ClientesActions.clientClientesDeleteInit(),
                ClientesActions.clientClientesFiltersFirstGetInit(),
                ClientesActions.clientClientesFiltersGetInit(),
                ClientesActions.clientClientesGetInit(),
                ClientesActions.clientClientesIdsGetInit(),
                ClientesActions.clientClientesPostInit(),
                ClientesActions.clientClientesPutInit(),
                ClientesActions.clientClientesRangeDeleteInit(),
                ClientesActions.clientClientesRangePostInit(),
                ClientesActions.clientClientesRangePutInit(),
        ])
    ));

    clientClientesDeleteExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesDeleteExecute),
        switchMap(params =>
            this.api.clientClientesDelete(params, 'response').pipe(
                //@ts-ignore
                
                map(() => ClientesActions.clientClientesDeleteSuccess()),
                catchError(errors => of(ClientesActions.clientClientesDeleteSetError({errors})))
        )))
    );
    clientClientesFiltersFirstGetExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesFiltersFirstGetExecute),
        switchMap(params =>
            this.api.clientClientesFiltersFirstGet(params, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.clientClientesFiltersFirstGetSetData({data: response.body!.data  })),
                
                catchError(errors => of(ClientesActions.clientClientesFiltersFirstGetSetError({errors})))
        )))
    );
    clientClientesFiltersGetExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesFiltersGetExecute),
        switchMap(params =>
            this.api.clientClientesFiltersGet(params, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.clientClientesFiltersGetSetData({data: {items: response.body!.data, currentPage: Number(response.headers.get('X-Current-Page')),totalPages: Number(response.headers.get('X-Total-Pages')),pageSize: Number(response.headers.get('X-Page-Size')),totalCount: Number(response.headers.get('X-Total-Count'))}  })),
                
                catchError(errors => of(ClientesActions.clientClientesFiltersGetSetError({errors})))
        )))
    );
    clientClientesGetExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesGetExecute),
        switchMap(params =>
            this.api.clientClientesGet(params, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.clientClientesGetSetData({data: response.body!.data  })),
                
                catchError(errors => of(ClientesActions.clientClientesGetSetError({errors})))
        )))
    );
    clientClientesIdsGetExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesIdsGetExecute),
        switchMap(params =>
            this.api.clientClientesIdsGet(params, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.clientClientesIdsGetSetData({data: {items: response.body!.data, currentPage: Number(response.headers.get('X-Current-Page')),totalPages: Number(response.headers.get('X-Total-Pages')),pageSize: Number(response.headers.get('X-Page-Size')),totalCount: Number(response.headers.get('X-Total-Count'))}  })),
                
                catchError(errors => of(ClientesActions.clientClientesIdsGetSetError({errors})))
        )))
    );
    clientClientesPostExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesPostExecute),
        switchMap(params =>
            this.api.clientClientesPost(params, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.clientClientesPostSetData({data: response.body!.data  })),
                
                catchError(errors => of(ClientesActions.clientClientesPostSetError({errors})))
        )))
    );
    clientClientesPutExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesPutExecute),
        switchMap(params =>
            this.api.clientClientesPut(params, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.clientClientesPutSetData({data: response.body!.data  })),
                
                catchError(errors => of(ClientesActions.clientClientesPutSetError({errors})))
        )))
    );
    clientClientesRangeDeleteExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesRangeDeleteExecute),
        switchMap(params =>
            this.api.clientClientesRangeDelete(params, 'response').pipe(
                //@ts-ignore
                
                map(() => ClientesActions.clientClientesRangeDeleteSuccess()),
                catchError(errors => of(ClientesActions.clientClientesRangeDeleteSetError({errors})))
        )))
    );
    clientClientesRangePostExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesRangePostExecute),
        switchMap(params =>
            this.api.clientClientesRangePost(params, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.clientClientesRangePostSetData({data: {items: response.body!.data, currentPage: Number(response.headers.get('X-Current-Page')),totalPages: Number(response.headers.get('X-Total-Pages')),pageSize: Number(response.headers.get('X-Page-Size')),totalCount: Number(response.headers.get('X-Total-Count'))}  })),
                
                catchError(errors => of(ClientesActions.clientClientesRangePostSetError({errors})))
        )))
    );
    clientClientesRangePutExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.clientClientesRangePutExecute),
        switchMap(params =>
            this.api.clientClientesRangePut(params, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.clientClientesRangePutSetData({data: {items: response.body!.data, currentPage: Number(response.headers.get('X-Current-Page')),totalPages: Number(response.headers.get('X-Total-Pages')),pageSize: Number(response.headers.get('X-Page-Size')),totalCount: Number(response.headers.get('X-Total-Count'))}  })),
                
                catchError(errors => of(ClientesActions.clientClientesRangePutSetError({errors})))
        )))
    );
}
