/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec
        }       from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import {Response} from '@api/client/models/common/response.model';
import {Pagination} from '@api/client/models/common/pagination.model';
import { BaseResponse } from '@api/client/models/base-response.model';
import { Client } from '@api/client/models/client.model';
import { Client2 } from '@api/client/models/client2.model';
import { ClientUpdate } from '@api/client/models/client-update.model';
import { ClientUpdate2 } from '@api/client/models/client-update2.model';
import { ValidationError } from '@api/client/models/validation-error.model';
import { ClientesReduxModule } from '@api/client/redux/clientes/clientes.module';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { ServiceConfiguration } from '../configuration';
import { BaseService } from './api.base.service';

export class DeleteRequest {
    entityId?: number | undefined | null;
	public IsEmpty(){return !(this.entityId);}
    constructor(init: Partial<DeleteRequest> = {}){
        Object.assign(this, init);
             this.entityId = null;
            
    }   
}
export class FiltersFirstGetRequest {
    nombre?: string | undefined | null;
    apellido?: string | undefined | null;
    razonSocial?: string | undefined | null;
    cuit?: string | undefined | null;
    fechaNacimientoMin?: string | undefined | null;
    fechaNacimientoMax?: string | undefined | null;
    telefonoCelular?: string | undefined | null;
    email?: string | undefined | null;
    orderBy?: string | undefined | null;
	public IsEmpty(){return !(this.nombre || this.apellido || this.razonSocial || this.cuit || this.fechaNacimientoMin || this.fechaNacimientoMax || this.telefonoCelular || this.email);}
    constructor(init: Partial<FiltersFirstGetRequest> = {}){
        Object.assign(this, init);
             this.nombre = null;
            
             this.apellido = null;
            
             this.razonSocial = null;
            
             this.cuit = null;
            
             this.fechaNacimientoMin = null;
            
             this.fechaNacimientoMax = null;
            
             this.telefonoCelular = null;
            
             this.email = null;
            
             this.orderBy = null;
            
    }   
}
export class FiltersGetRequest {
    nombre?: string | undefined | null;
    apellido?: string | undefined | null;
    razonSocial?: string | undefined | null;
    cuit?: string | undefined | null;
    fechaNacimientoMin?: string | undefined | null;
    fechaNacimientoMax?: string | undefined | null;
    telefonoCelular?: string | undefined | null;
    email?: string | undefined | null;
    orderBy?: string | undefined | null;
    page?: number | undefined | null;
    pageSize?: number | undefined | null;
	public IsEmpty(){return !(this.nombre || this.apellido || this.razonSocial || this.cuit || this.fechaNacimientoMin || this.fechaNacimientoMax || this.telefonoCelular || this.email);}
    constructor(init: Partial<FiltersGetRequest> = {}){
        Object.assign(this, init);
             this.nombre = null;
            
             this.apellido = null;
            
             this.razonSocial = null;
            
             this.cuit = null;
            
             this.fechaNacimientoMin = null;
            
             this.fechaNacimientoMax = null;
            
             this.telefonoCelular = null;
            
             this.email = null;
            
             this.orderBy = null;
            
             this.page = null;
            
             this.pageSize = null;
            
    }   
}
export class GetRequest {
    entityId?: number | undefined | null;
	public IsEmpty(){return !(this.entityId);}
    constructor(init: Partial<GetRequest> = {}){
        Object.assign(this, init);
             this.entityId = null;
            
    }   
}
export class IdsGetRequest {
    entityIds?: number[] | undefined | null;
    page?: number | undefined | null;
    pageSize?: number | undefined | null;
	public IsEmpty(){return !((this.entityIds ? this.entityIds.length > 0 : false));}
    constructor(init: Partial<IdsGetRequest> = {}){
        Object.assign(this, init);
             this.entityIds = [];
            
             this.page = null;
            
             this.pageSize = null;
            
    }   
}
export class PostRequest {
    client?: Client | undefined | null;
	public IsEmpty(){return !(this.client?.IsEmpty());}
    constructor(init: Partial<PostRequest> = {}){
        Object.assign(this, init);
            
             this.client = new Client(); 
    }   
}
export class PutRequest {
    clientUpdate?: ClientUpdate | undefined | null;
	public IsEmpty(){return !(this.clientUpdate?.IsEmpty());}
    constructor(init: Partial<PutRequest> = {}){
        Object.assign(this, init);
            
             this.clientUpdate = new ClientUpdate(); 
    }   
}
export class RangeDeleteRequest {
    requestBody?: number[] | undefined | null;
	public IsEmpty(){return !((this.requestBody ? this.requestBody.length > 0 : false));}
    constructor(init: Partial<RangeDeleteRequest> = {}){
        Object.assign(this, init);
             this.requestBody = [];
            
    }   
}
export class RangePostRequest {
    client2?: Client2[] | undefined | null;
	public IsEmpty(){return !((this.client2 ? this.client2.length > 0 : false));}
    constructor(init: Partial<RangePostRequest> = {}){
        Object.assign(this, init);
             this.client2 = [];
            
    }   
}
export class RangePutRequest {
    clientUpdate2?: ClientUpdate2[] | undefined | null;
	public IsEmpty(){return !((this.clientUpdate2 ? this.clientUpdate2.length > 0 : false));}
    constructor(init: Partial<RangePutRequest> = {}){
        Object.assign(this, init);
             this.clientUpdate2 = [];
            
    }   
}


@Injectable()
export class ClientesService extends BaseService {

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string|string[], @Optional() configuration?: ServiceConfiguration) {
        super(basePath, configuration);
    }

    /**
     * @endpoint DELETE 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Delete(requestParameters?: DeleteRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<BaseResponse>;
    public Delete(requestParameters?: DeleteRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<BaseResponse>>;
    public Delete(requestParameters?: DeleteRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<BaseResponse>>;
    public Delete(requestParameters?: DeleteRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const entityId = requestParameters?.entityId;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>entityId, 'entityId');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<BaseResponse>('DELETE', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint GET 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Client>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Client>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Client>>>;
    public FiltersFirstGet(requestParameters?: FiltersFirstGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const nombre = requestParameters?.nombre;
        const apellido = requestParameters?.apellido;
        const razonSocial = requestParameters?.razonSocial;
        const cuit = requestParameters?.cuit;
        const fechaNacimientoMin = requestParameters?.fechaNacimientoMin;
        const fechaNacimientoMax = requestParameters?.fechaNacimientoMax;
        const telefonoCelular = requestParameters?.telefonoCelular;
        const email = requestParameters?.email;
        const orderBy = requestParameters?.orderBy;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>nombre, 'Nombre');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>apellido, 'Apellido');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>razonSocial, 'RazonSocial');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>cuit, 'Cuit');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>fechaNacimientoMin, 'FechaNacimientoMin');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>fechaNacimientoMax, 'FechaNacimientoMax');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>telefonoCelular, 'TelefonoCelular');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>email, 'Email');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>orderBy, 'OrderBy');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes/filters-first`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Client>('GET', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint GET 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Client>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Client>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Client>>>>;
    public FiltersGet(requestParameters?: FiltersGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const nombre = requestParameters?.nombre;
        const apellido = requestParameters?.apellido;
        const razonSocial = requestParameters?.razonSocial;
        const cuit = requestParameters?.cuit;
        const fechaNacimientoMin = requestParameters?.fechaNacimientoMin;
        const fechaNacimientoMax = requestParameters?.fechaNacimientoMax;
        const telefonoCelular = requestParameters?.telefonoCelular;
        const email = requestParameters?.email;
        const orderBy = requestParameters?.orderBy;
        const page = requestParameters?.page;
        const pageSize = requestParameters?.pageSize;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>nombre, 'Nombre');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>apellido, 'Apellido');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>razonSocial, 'RazonSocial');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>cuit, 'Cuit');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>fechaNacimientoMin, 'FechaNacimientoMin');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>fechaNacimientoMax, 'FechaNacimientoMax');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>telefonoCelular, 'TelefonoCelular');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>email, 'Email');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>orderBy, 'OrderBy');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>page, 'Page');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>pageSize, 'PageSize');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes/filters`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Client[]>('GET', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint GET 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Get(requestParameters?: GetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Client>>;
    public Get(requestParameters?: GetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Client>>>;
    public Get(requestParameters?: GetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Client>>>;
    public Get(requestParameters?: GetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const entityId = requestParameters?.entityId;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>entityId, 'entityId');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Client>('GET', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint GET 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Client>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Client>>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Client>>>>;
    public IdsGet(requestParameters?: IdsGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const entityIds = requestParameters?.entityIds;
        const page = requestParameters?.page;
        const pageSize = requestParameters?.pageSize;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (entityIds) {
            entityIds.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'entityIds');
            })
        }
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>page, 'page');
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>pageSize, 'pageSize');

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes/ids`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Client[]>('GET', `${basePath}${localVarPath}`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint POST 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Post(requestParameters?: PostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Client>>;
    public Post(requestParameters?: PostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Client>>>;
    public Post(requestParameters?: PostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Client>>>;
    public Post(requestParameters?: PostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const client = requestParameters?.client;

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Client>('POST', `${basePath}${localVarPath}`,
            {
                body: client,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint PUT 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public Put(requestParameters?: PutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Client>>;
    public Put(requestParameters?: PutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Client>>>;
    public Put(requestParameters?: PutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Client>>>;
    public Put(requestParameters?: PutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const clientUpdate = requestParameters?.clientUpdate;

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Client>('PUT', `${basePath}${localVarPath}`,
            {
                body: clientUpdate,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint DELETE 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public RangeDelete(requestParameters?: RangeDeleteRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<BaseResponse>;
    public RangeDelete(requestParameters?: RangeDeleteRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<BaseResponse>>;
    public RangeDelete(requestParameters?: RangeDeleteRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<BaseResponse>>;
    public RangeDelete(requestParameters?: RangeDeleteRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const requestBody = requestParameters?.requestBody;

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<BaseResponse>('DELETE', `${basePath}${localVarPath}`,
            {
                body: requestBody,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint POST 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public RangePost(requestParameters?: RangePostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Client>>>;
    public RangePost(requestParameters?: RangePostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Client>>>>;
    public RangePost(requestParameters?: RangePostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Client>>>>;
    public RangePost(requestParameters?: RangePostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const client2 = requestParameters?.client2;

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Client[]>('POST', `${basePath}${localVarPath}`,
            {
                body: client2,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @endpoint PUT 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public RangePut(requestParameters?: RangePutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Client>>>;
    public RangePut(requestParameters?: RangePutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Client>>>>;
    public RangePut(requestParameters?: RangePutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Client>>>>;
    public RangePut(requestParameters?: RangePutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const clientUpdate2 = requestParameters?.clientUpdate2;

        let localVarHeaders = this.defaultHeaders;

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }



        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/client/Clientes/range`;
        const { basePath, withCredentials } = this.configuration;
        return this.httpClient.request<Client[]>('PUT', `${basePath}${localVarPath}`,
            {
                body: clientUpdate2,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
