import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, switchMap, withLatestFrom, pairwise, filter, debounceTime } from 'rxjs';
import { ClientesService } from '@api/client/services/clientes.service';
import { ClientesActions } from './clientes.actions';
import { selectDeleteRequest } from './clientes.selector';
import { selectFiltersFirstGetRequest } from './clientes.selector';
import { selectFiltersGetRequest } from './clientes.selector';
import { selectGetRequest } from './clientes.selector';
import { selectIdsGetRequest } from './clientes.selector';
import { selectPostRequest } from './clientes.selector';
import { selectPutRequest } from './clientes.selector';
import { selectRangeDeleteRequest } from './clientes.selector';
import { selectRangePostRequest } from './clientes.selector';
import { selectRangePutRequest } from './clientes.selector';
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
import { Store } from '@ngrx/store';
import { ValidationErrors } from '@angular/forms';
import { ValidationError } from '@api/client/models/validation-error.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable(
    
)
export class ClientesEffects {
    private actions$ = inject(Actions);
    private api = inject(ClientesService);
    private store = inject(Store);

    Init$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.Init),
        mergeMap(() => [
                ClientesActions.DeleteInit(),
                ClientesActions.FiltersFirstGetInit(),
                ClientesActions.FiltersGetInit(),
                ClientesActions.GetInit(),
                ClientesActions.IdsGetInit(),
                ClientesActions.PostInit(),
                ClientesActions.PutInit(),
                ClientesActions.RangeDeleteInit(),
                ClientesActions.RangePostInit(),
                ClientesActions.RangePutInit(),
        ])
    ));

    DeleteUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.DeleteRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<DeleteRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof DeleteRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.DeleteRequestUpdateSuccess({ request })
            )
        )
    );
    DeleteUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.DeleteRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<DeleteRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof DeleteRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof DeleteRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.DeleteRequestUpdateOneSuccess({ key,value })
        )
    ));
    DeleteExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.DeleteExecute),
        withLatestFrom(this.store.select(selectDeleteRequest)),
        switchMap(([action, request]) =>
            this.api.Delete(request as DeleteRequest, 'response').pipe(
                //@ts-ignore
                
                map(() => ClientesActions.DeleteSuccess()),
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.DeleteSetError({errors: newErrors}))
                        }
                    }
                    return EMPTY;
                })
        )))
    );
    FiltersFirstGetUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.FiltersFirstGetRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<FiltersFirstGetRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof FiltersFirstGetRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.FiltersFirstGetRequestUpdateSuccess({ request })
            )
        )
    );
    FiltersFirstGetUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.FiltersFirstGetRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<FiltersFirstGetRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof FiltersFirstGetRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof FiltersFirstGetRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.FiltersFirstGetRequestUpdateOneSuccess({ key,value })
        )
    ));
    FiltersFirstGetExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.FiltersFirstGetExecute),
        withLatestFrom(this.store.select(selectFiltersFirstGetRequest)),
        switchMap(([action, request]) =>
            this.api.FiltersFirstGet(request as FiltersFirstGetRequest, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.FiltersFirstGetSetData({data: response.body!.data  })),
                
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.FiltersFirstGetSetError({errors: newErrors}))
                        }
                    }else if(newErr.status == 404){return of(ClientesActions.FiltersFirstGetDataInit()); }
                    return EMPTY;
                })
        )))
    );
    
    FiltersGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.FiltersGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                ClientesActions.FiltersGetRequestUpdate({ request })
            )
        )
    );
    FiltersGetUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.FiltersGetRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<FiltersGetRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof FiltersGetRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.FiltersGetRequestUpdateSuccess({ request })
            )
        )
    );
    FiltersGetUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.FiltersGetRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<FiltersGetRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof FiltersGetRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof FiltersGetRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.FiltersGetRequestUpdateOneSuccess({ key,value })
        )
    ));
    FiltersGetExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.FiltersGetExecute),
        withLatestFrom(this.store.select(selectFiltersGetRequest)),
        switchMap(([action, request]) =>
            this.api.FiltersGet(request as FiltersGetRequest, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.FiltersGetSetData({data: {items: response.body!.data, currentPage: Number(response.headers.get('X-Current-Page')),totalPages: Number(response.headers.get('X-Total-Pages')),pageSize: Number(response.headers.get('X-Page-Size')),totalCount: Number(response.headers.get('X-Total-Count'))}  })),
                
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.FiltersGetSetError({errors: newErrors}))
                        }
                    }else if(newErr.status == 404){return of(ClientesActions.FiltersGetDataInit()); }
                    return EMPTY;
                })
        )))
    );
    GetUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.GetRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<GetRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof GetRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.GetRequestUpdateSuccess({ request })
            )
        )
    );
    GetUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.GetRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<GetRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof GetRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof GetRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.GetRequestUpdateOneSuccess({ key,value })
        )
    ));
    GetExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.GetExecute),
        withLatestFrom(this.store.select(selectGetRequest)),
        switchMap(([action, request]) =>
            this.api.Get(request as GetRequest, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.GetSetData({data: response.body!.data  })),
                
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.GetSetError({errors: newErrors}))
                        }
                    }else if(newErr.status == 404){return of(ClientesActions.GetDataInit()); }
                    return EMPTY;
                })
        )))
    );
    
    IdsGetChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.IdsGetChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                ClientesActions.IdsGetRequestUpdate({ request })
            )
        )
    );
    IdsGetUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.IdsGetRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<IdsGetRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof IdsGetRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.IdsGetRequestUpdateSuccess({ request })
            )
        )
    );
    IdsGetUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.IdsGetRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<IdsGetRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof IdsGetRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof IdsGetRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.IdsGetRequestUpdateOneSuccess({ key,value })
        )
    ));
    IdsGetExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.IdsGetExecute),
        withLatestFrom(this.store.select(selectIdsGetRequest)),
        switchMap(([action, request]) =>
            this.api.IdsGet(request as IdsGetRequest, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.IdsGetSetData({data: {items: response.body!.data, currentPage: Number(response.headers.get('X-Current-Page')),totalPages: Number(response.headers.get('X-Total-Pages')),pageSize: Number(response.headers.get('X-Page-Size')),totalCount: Number(response.headers.get('X-Total-Count'))}  })),
                
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.IdsGetSetError({errors: newErrors}))
                        }
                    }else if(newErr.status == 404){return of(ClientesActions.IdsGetDataInit()); }
                    return EMPTY;
                })
        )))
    );
    PostUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.PostRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<PostRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof PostRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.PostRequestUpdateSuccess({ request })
            )
        )
    );
    PostUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.PostRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<PostRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof PostRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof PostRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.PostRequestUpdateOneSuccess({ key,value })
        )
    ));
    PostExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.PostExecute),
        withLatestFrom(this.store.select(selectPostRequest)),
        switchMap(([action, request]) =>
            this.api.Post(request as PostRequest, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.PostSetData({data: response.body!.data  })),
                
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.PostSetError({errors: newErrors}))
                        }
                    }else if(newErr.status == 404){return of(ClientesActions.PostDataInit()); }
                    return EMPTY;
                })
        )))
    );
    PutUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.PutRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<PutRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof PutRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.PutRequestUpdateSuccess({ request })
            )
        )
    );
    PutUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.PutRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<PutRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof PutRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof PutRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.PutRequestUpdateOneSuccess({ key,value })
        )
    ));
    PutExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.PutExecute),
        withLatestFrom(this.store.select(selectPutRequest)),
        switchMap(([action, request]) =>
            this.api.Put(request as PutRequest, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.PutSetData({data: response.body!.data  })),
                
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.PutSetError({errors: newErrors}))
                        }
                    }else if(newErr.status == 404){return of(ClientesActions.PutDataInit()); }
                    return EMPTY;
                })
        )))
    );
    RangeDeleteUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.RangeDeleteRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<RangeDeleteRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof RangeDeleteRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.RangeDeleteRequestUpdateSuccess({ request })
            )
        )
    );
    RangeDeleteUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.RangeDeleteRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<RangeDeleteRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof RangeDeleteRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof RangeDeleteRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.RangeDeleteRequestUpdateOneSuccess({ key,value })
        )
    ));
    RangeDeleteExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.RangeDeleteExecute),
        withLatestFrom(this.store.select(selectRangeDeleteRequest)),
        switchMap(([action, request]) =>
            this.api.RangeDelete(request as RangeDeleteRequest, 'response').pipe(
                //@ts-ignore
                
                map(() => ClientesActions.RangeDeleteSuccess()),
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.RangeDeleteSetError({errors: newErrors}))
                        }
                    }
                    return EMPTY;
                })
        )))
    );
    
    RangePostChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.RangePostChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                ClientesActions.RangePostRequestUpdate({ request })
            )
        )
    );
    RangePostUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.RangePostRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<RangePostRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof RangePostRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.RangePostRequestUpdateSuccess({ request })
            )
        )
    );
    RangePostUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.RangePostRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<RangePostRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof RangePostRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof RangePostRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.RangePostRequestUpdateOneSuccess({ key,value })
        )
    ));
    RangePostExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.RangePostExecute),
        withLatestFrom(this.store.select(selectRangePostRequest)),
        switchMap(([action, request]) =>
            this.api.RangePost(request as RangePostRequest, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.RangePostSetData({data: {items: response.body!.data, currentPage: Number(response.headers.get('X-Current-Page')),totalPages: Number(response.headers.get('X-Total-Pages')),pageSize: Number(response.headers.get('X-Page-Size')),totalCount: Number(response.headers.get('X-Total-Count'))}  })),
                
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.RangePostSetError({errors: newErrors}))
                        }
                    }else if(newErr.status == 404){return of(ClientesActions.RangePostDataInit()); }
                    return EMPTY;
                })
        )))
    );
    
    RangePutChangePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.RangePutChangePage),
            map(({ event }) => ({
                pageSize: event.pageSize,
                currentPage: event.pageIndex + 1
            })),
            map(request =>
                //@ts-ignore
                ClientesActions.RangePutRequestUpdate({ request })
            )
        )
    );
    RangePutUpdateRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.RangePutRequestUpdate),
            debounceTime(300),
            map(action => action.request),
            pairwise<RangePutRequest>(),
            map(([prev, curr]) => {
                const changedKeys = (Object.keys(curr) as (keyof RangePutRequest)[])
                    .filter(k => prev[k] !== curr[k]);

                if (changedKeys.length === 0) {
                    return [prev, false] as const;
                }

                const updated = { ...prev };
                changedKeys.forEach(k => {
                    //@ts-ignore
                    updated[k] = curr[k];
                });

                return [updated, true] as const;
            }),
            filter(([_, status]) => status),
            map(([request]) =>
                ClientesActions.RangePutRequestUpdateSuccess({ request })
            )
        )
    );
    RangePutUpdateOneRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.RangePutRequestUpdateOne),
        debounceTime(300),
        map(action => action.request),
        pairwise<RangePutRequest>(),
        map(([prev, curr]) => {
        const key = (Object.keys(curr) as (keyof RangePutRequest)[])
            .find(k => prev[k] !== curr[k]);
            return key ? [key, curr[key]] : [null, null];
        }),
        filter((pair): pair is [keyof RangePutRequest, any] => pair[0] !== null),
        map(([key,value]) =>
            ClientesActions.RangePutRequestUpdateOneSuccess({ key,value })
        )
    ));
    RangePutExecute$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.RangePutExecute),
        withLatestFrom(this.store.select(selectRangePutRequest)),
        switchMap(([action, request]) =>
            this.api.RangePut(request as RangePutRequest, 'response').pipe(
                //@ts-ignore
                map(response => ClientesActions.RangePutSetData({data: {items: response.body!.data, currentPage: Number(response.headers.get('X-Current-Page')),totalPages: Number(response.headers.get('X-Total-Pages')),pageSize: Number(response.headers.get('X-Page-Size')),totalCount: Number(response.headers.get('X-Total-Count'))}  })),
                
                catchError((err, caught) => {
                    const newErr = err as HttpErrorResponse;
                    if(newErr.status == 400){
                        if(newErr.error){
                            const newErrors = newErr.error as ValidationError[];
                            // @ts-ignore
                            return of(ClientesActions.RangePutSetError({errors: newErrors}))
                        }
                    }else if(newErr.status == 404){return of(ClientesActions.RangePutDataInit()); }
                    return EMPTY;
                })
        )))
    );
}
