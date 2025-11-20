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
import { ValidationError } from '@api/client/models/validation-error.model';
import { ClientesReduxModule } from '@api/client/redux/clientes/clientes.module';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { ServiceConfiguration } from '../configuration';
import { BaseService } from './api.base.service';


export interface clientClientesDeleteRequest {
    entityId?: number;
}

export interface clientClientesFiltersFirstGetRequest {
    nombre?: string;
    apellido?: string;
    razonSocial?: string;
    cuit?: string;
    fechaNacimientoMin?: string;
    fechaNacimientoMax?: string;
    telefonoCelular?: string;
    email?: string;
    orderBy?: string;
}

export interface clientClientesFiltersGetRequest {
    nombre?: string;
    apellido?: string;
    razonSocial?: string;
    cuit?: string;
    fechaNacimientoMin?: string;
    fechaNacimientoMax?: string;
    telefonoCelular?: string;
    email?: string;
    orderBy?: string;
    page?: number;
    pageSize?: number;
}

export interface clientClientesGetRequest {
    entityId?: number;
}

export interface clientClientesIdsGetRequest {
    entityIds?: number[];
    page?: number;
    pageSize?: number;
}

export interface clientClientesPostRequest {
    client: Client;
}

export interface clientClientesPutRequest {
    client: Client;
}

export interface clientClientesRangeDeleteRequest {
    requestBody: number[];
}

export interface clientClientesRangePostRequest {
    client: Client[];
}

export interface clientClientesRangePutRequest {
    client: Client[];
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
    public clientClientesDelete(requestParameters?: clientClientesDeleteRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<BaseResponse>;
    public clientClientesDelete(requestParameters?: clientClientesDeleteRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<BaseResponse>>;
    public clientClientesDelete(requestParameters?: clientClientesDeleteRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<BaseResponse>>;
    public clientClientesDelete(requestParameters?: clientClientesDeleteRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
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
    public clientClientesFiltersFirstGet(requestParameters?: clientClientesFiltersFirstGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Client>>;
    public clientClientesFiltersFirstGet(requestParameters?: clientClientesFiltersFirstGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Client>>>;
    public clientClientesFiltersFirstGet(requestParameters?: clientClientesFiltersFirstGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Client>>>;
    public clientClientesFiltersFirstGet(requestParameters?: clientClientesFiltersFirstGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
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
    public clientClientesFiltersGet(requestParameters?: clientClientesFiltersGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Client>>>;
    public clientClientesFiltersGet(requestParameters?: clientClientesFiltersGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Client>>>>;
    public clientClientesFiltersGet(requestParameters?: clientClientesFiltersGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Client>>>>;
    public clientClientesFiltersGet(requestParameters?: clientClientesFiltersGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
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
    public clientClientesGet(requestParameters?: clientClientesGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Client>>;
    public clientClientesGet(requestParameters?: clientClientesGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Client>>>;
    public clientClientesGet(requestParameters?: clientClientesGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Client>>>;
    public clientClientesGet(requestParameters?: clientClientesGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
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
    public clientClientesIdsGet(requestParameters?: clientClientesIdsGetRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Client>>>;
    public clientClientesIdsGet(requestParameters?: clientClientesIdsGetRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Client>>>>;
    public clientClientesIdsGet(requestParameters?: clientClientesIdsGetRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Client>>>>;
    public clientClientesIdsGet(requestParameters?: clientClientesIdsGetRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
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
    public clientClientesPost(requestParameters: clientClientesPostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Client>>;
    public clientClientesPost(requestParameters: clientClientesPostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Client>>>;
    public clientClientesPost(requestParameters: clientClientesPostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Client>>>;
    public clientClientesPost(requestParameters: clientClientesPostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const client = requestParameters?.client;
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling clientClientesPost.');
        }

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
    public clientClientesPut(requestParameters: clientClientesPutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Client>>;
    public clientClientesPut(requestParameters: clientClientesPutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Client>>>;
    public clientClientesPut(requestParameters: clientClientesPutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Client>>>;
    public clientClientesPut(requestParameters: clientClientesPutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const client = requestParameters?.client;
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling clientClientesPut.');
        }

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
     * @endpoint DELETE 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public clientClientesRangeDelete(requestParameters: clientClientesRangeDeleteRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<BaseResponse>;
    public clientClientesRangeDelete(requestParameters: clientClientesRangeDeleteRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<BaseResponse>>;
    public clientClientesRangeDelete(requestParameters: clientClientesRangeDeleteRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<BaseResponse>>;
    public clientClientesRangeDelete(requestParameters: clientClientesRangeDeleteRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const requestBody = requestParameters?.requestBody;
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling clientClientesRangeDelete.');
        }

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
    public clientClientesRangePost(requestParameters: clientClientesRangePostRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Client>>>;
    public clientClientesRangePost(requestParameters: clientClientesRangePostRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Client>>>>;
    public clientClientesRangePost(requestParameters: clientClientesRangePostRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Client>>>>;
    public clientClientesRangePost(requestParameters: clientClientesRangePostRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const client = requestParameters?.client;
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling clientClientesRangePost.');
        }

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
    public clientClientesRangePut(requestParameters: clientClientesRangePutRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<Response<Pagination<Client>>>;
    public clientClientesRangePut(requestParameters: clientClientesRangePutRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpResponse<Response<Pagination<Client>>>>;
    public clientClientesRangePut(requestParameters: clientClientesRangePutRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json',}): Observable<HttpEvent<Response<Pagination<Client>>>>;
    public clientClientesRangePut(requestParameters: clientClientesRangePutRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json',}): Observable<any> {
        const client = requestParameters?.client;
        if (client === null || client === undefined) {
            throw new Error('Required parameter client was null or undefined when calling clientClientesRangePut.');
        }

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
                body: client,
                responseType: <any>responseType_,
                ...(withCredentials ? { withCredentials } : {}),
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
