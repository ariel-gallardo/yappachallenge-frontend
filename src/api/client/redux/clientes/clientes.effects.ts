import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, switchMap, withLatestFrom, pairwise, filter, debounceTime } from 'rxjs';
import { ClientesService } from '@api/client/services/clientes.service';
import { ClientesActions } from './clientes.actions';
import { selectDeleteRequest } from './clientes.selector';
import { selectDeleteFirstInit } from './clientes.selector';
import { selectFiltersFirstGetRequest } from './clientes.selector';
import { selectFiltersFirstGetFirstInit } from './clientes.selector';
import { selectFiltersGetRequest } from './clientes.selector';
import { selectFiltersGetFirstInit } from './clientes.selector';
import { selectGetRequest } from './clientes.selector';
import { selectGetFirstInit } from './clientes.selector';
import { selectIdsGetRequest } from './clientes.selector';
import { selectIdsGetFirstInit } from './clientes.selector';
import { selectPostRequest } from './clientes.selector';
import { selectPostFirstInit } from './clientes.selector';
import { selectPutRequest } from './clientes.selector';
import { selectPutFirstInit } from './clientes.selector';
import { selectRangeDeleteRequest } from './clientes.selector';
import { selectRangeDeleteFirstInit } from './clientes.selector';
import { selectRangePostRequest } from './clientes.selector';
import { selectRangePostFirstInit } from './clientes.selector';
import { selectRangePutRequest } from './clientes.selector';
import { selectRangePutFirstInit } from './clientes.selector';
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
import {SnackbarService} from '@features/snackbar/snackbar-service'; 

@Injectable(
    
)
export class ClientesEffects {
    private actions$ = inject(Actions);
    private api = inject(ClientesService);
    private store = inject(Store);
    private snackbarService = inject(SnackbarService);

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
        withLatestFrom(
            this.store.select(selectDeleteFirstInit),
            this.store.select(selectDeleteRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof DeleteRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectDeleteFirstInit),
                this.store.select(selectDeleteRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof DeleteRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof DeleteRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.DeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        DeleteExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.DeleteExecute),
            withLatestFrom(
                this.store.select(selectDeleteRequest),
                this.store.select(selectDeleteFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.Delete(request as DeleteRequest, 'response').pipe(
                map(() => ClientesActions.DeleteSuccess()),
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.DeleteSetError({ errors: newErrors }));
                }
                return EMPTY;
                })
            );
            })
        )
        );

    FiltersFirstGetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.FiltersFirstGetRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectFiltersFirstGetFirstInit),
            this.store.select(selectFiltersFirstGetRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof FiltersFirstGetRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectFiltersFirstGetFirstInit),
                this.store.select(selectFiltersFirstGetRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof FiltersFirstGetRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof FiltersFirstGetRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.FiltersFirstGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersFirstGetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.FiltersFirstGetExecute),
            withLatestFrom(
                this.store.select(selectFiltersFirstGetRequest),
                this.store.select(selectFiltersFirstGetFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.FiltersFirstGet(request as FiltersFirstGetRequest, 'response').pipe(
                map(response =>{
                    
                    return ClientesActions.FiltersFirstGetSetData({
                        data:                         response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.FiltersFirstGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(ClientesActions.FiltersFirstGetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
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
        withLatestFrom(
            this.store.select(selectFiltersGetFirstInit),
            this.store.select(selectFiltersGetRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof FiltersGetRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectFiltersGetFirstInit),
                this.store.select(selectFiltersGetRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof FiltersGetRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof FiltersGetRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.FiltersGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        FiltersGetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.FiltersGetExecute),
            withLatestFrom(
                this.store.select(selectFiltersGetRequest),
                this.store.select(selectFiltersGetFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.FiltersGet(request as FiltersGetRequest, 'response').pipe(
                map(response =>{
                    
                    return ClientesActions.FiltersGetSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            currentPage: Number(response.headers.get('X-Current-Page')),
                            totalPages: Number(response.headers.get('X-Total-Pages')),
                            pageSize: Number(response.headers.get('X-Page-Size')),
                            totalCount: Number(response.headers.get('X-Total-Count'))
                        }
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.FiltersGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(ClientesActions.FiltersGetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    GetUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.GetRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectGetFirstInit),
            this.store.select(selectGetRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof GetRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectGetFirstInit),
                this.store.select(selectGetRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof GetRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof GetRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.GetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        GetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.GetExecute),
            withLatestFrom(
                this.store.select(selectGetRequest),
                this.store.select(selectGetFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.Get(request as GetRequest, 'response').pipe(
                map(response =>{
                    
                    return ClientesActions.GetSetData({
                        data:                         response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.GetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(ClientesActions.GetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
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
        withLatestFrom(
            this.store.select(selectIdsGetFirstInit),
            this.store.select(selectIdsGetRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof IdsGetRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectIdsGetFirstInit),
                this.store.select(selectIdsGetRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof IdsGetRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof IdsGetRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.IdsGetRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        IdsGetExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.IdsGetExecute),
            withLatestFrom(
                this.store.select(selectIdsGetRequest),
                this.store.select(selectIdsGetFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.IdsGet(request as IdsGetRequest, 'response').pipe(
                map(response =>{
                    
                    return ClientesActions.IdsGetSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            currentPage: Number(response.headers.get('X-Current-Page')),
                            totalPages: Number(response.headers.get('X-Total-Pages')),
                            pageSize: Number(response.headers.get('X-Page-Size')),
                            totalCount: Number(response.headers.get('X-Total-Count'))
                        }
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.IdsGetSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(ClientesActions.IdsGetDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    PostUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.PostRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectPostFirstInit),
            this.store.select(selectPostRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof PostRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectPostFirstInit),
                this.store.select(selectPostRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof PostRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof PostRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.PostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PostExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.PostExecute),
            withLatestFrom(
                this.store.select(selectPostRequest),
                this.store.select(selectPostFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.Post(request as PostRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return ClientesActions.PostSetData({
                        data:                         response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.PostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(ClientesActions.PostDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    PutUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.PutRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectPutFirstInit),
            this.store.select(selectPutRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof PutRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectPutFirstInit),
                this.store.select(selectPutRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof PutRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof PutRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.PutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        PutExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.PutExecute),
            withLatestFrom(
                this.store.select(selectPutRequest),
                this.store.select(selectPutFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.Put(request as PutRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return ClientesActions.PutSetData({
                        data:                         response.body!.data
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.PutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(ClientesActions.PutDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

    RangeDeleteUpdateRequest$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ClientesActions.RangeDeleteRequestUpdate),
        debounceTime(300),
        withLatestFrom(
            this.store.select(selectRangeDeleteFirstInit),
            this.store.select(selectRangeDeleteRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof RangeDeleteRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectRangeDeleteFirstInit),
                this.store.select(selectRangeDeleteRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof RangeDeleteRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof RangeDeleteRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.RangeDeleteRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangeDeleteExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.RangeDeleteExecute),
            withLatestFrom(
                this.store.select(selectRangeDeleteRequest),
                this.store.select(selectRangeDeleteFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.RangeDelete(request as RangeDeleteRequest, 'response').pipe(
                map(() => ClientesActions.RangeDeleteSuccess()),
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.RangeDeleteSetError({ errors: newErrors }));
                }
                return EMPTY;
                })
            );
            })
        )
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
        withLatestFrom(
            this.store.select(selectRangePostFirstInit),
            this.store.select(selectRangePostRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof RangePostRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectRangePostFirstInit),
                this.store.select(selectRangePostRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof RangePostRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof RangePostRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.RangePostRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePostExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.RangePostExecute),
            withLatestFrom(
                this.store.select(selectRangePostRequest),
                this.store.select(selectRangePostFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.RangePost(request as RangePostRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return ClientesActions.RangePostSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            currentPage: Number(response.headers.get('X-Current-Page')),
                            totalPages: Number(response.headers.get('X-Total-Pages')),
                            pageSize: Number(response.headers.get('X-Page-Size')),
                            totalCount: Number(response.headers.get('X-Total-Count'))
                        }
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.RangePostSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(ClientesActions.RangePostDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
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
        withLatestFrom(
            this.store.select(selectRangePutFirstInit),
            this.store.select(selectRangePutRequest)
        ),
        map(([action, firstInit, prevRequest]) => ({
            request: action.request,
            skip: firstInit,
            prevRequest
        })),
        map(({request, skip, prevRequest}) => {
        if (skip) {
            return [prevRequest, false] as const;
        }

        const changedKeys = (Object.keys(request) as (keyof RangePutRequest)[])
            .filter(k => prevRequest[k] !== request[k]);

        if (changedKeys.length === 0) {
            return [prevRequest, false] as const;
        }

        const updated = { ...prevRequest };
        changedKeys.forEach(k => {
            //@ts-ignore
            updated[k] = request[k];
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
            withLatestFrom(
                this.store.select(selectRangePutFirstInit),
                this.store.select(selectRangePutRequest)
            ),
            map(([action, firstInit, prevRequest]) => ({
                request: action.request,
                skip: firstInit,
                prevRequest
            })),
            map(({request,skip,prevRequest}) => {
            if (skip) {
                return [null, null] as const;
            }
            const key = (Object.keys(request) as (keyof RangePutRequest)[])
                .find(k => prevRequest[k] !== request[k]);

            return key ? [key, request[key]] : [null, null] as const;
            }),
            filter((pair): pair is [keyof RangePutRequest, any] => pair[0] !== null),
            map(([key, value]) =>
                ClientesActions.RangePutRequestUpdateOneSuccess({ key, value })
            )
        )
        );
        RangePutExecute$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientesActions.RangePutExecute),
            withLatestFrom(
                this.store.select(selectRangePutRequest),
                this.store.select(selectRangePutFirstInit)
            ),
            switchMap(([action, request, firstInit]) => {
            if (firstInit) {
                return EMPTY; 
            }

            return this.api.RangePut(request as RangePutRequest, 'response').pipe(
                map(response =>{
                      this.snackbarService.show(response.body!.message, response.body!.statusCode);
                    return ClientesActions.RangePutSetData({
                        data: 
                        {
                            //@ts-ignore
                            items: response.body!.data,
                            currentPage: Number(response.headers.get('X-Current-Page')),
                            totalPages: Number(response.headers.get('X-Total-Pages')),
                            pageSize: Number(response.headers.get('X-Page-Size')),
                            totalCount: Number(response.headers.get('X-Total-Count'))
                        }
                    })
                }),
                
                catchError((err) => {
                const newErr = err as HttpErrorResponse;
                if (newErr.status === 400 && newErr.error) {
                    const newErrors = newErr.error as ValidationError[];
                    //@ts-ignore
                    return of(ClientesActions.RangePutSetError({ errors: newErrors }));
                }
                else if (newErr.status === 404) {
                    return of(ClientesActions.RangePutDataInit());
                }
                return EMPTY;
                })
            );
            })
        )
        );

}
