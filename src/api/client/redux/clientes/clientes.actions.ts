import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 

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

import { BaseResponse } from '@api/client/models/base-response.model';
import { Client } from '@api/client/models/client.model';
import { ValidationError } from '@api/client/models/validation-error.model';

export class ClientesActions {

  static Init = createAction('[Clientes] Init');

  static clientClientesDeleteInit = createAction('[Clientes] clientClientesDeleteInit');
  static clientClientesDeleteExecute = createAction(
    '[Clientes] clientClientesDelete Execute',
    props<clientClientesDeleteRequest>()
  );

  static clientClientesDeleteSuccess = createAction(
    '[Clientes] clientClientesDelete Success',
  );

  static clientClientesDeleteSetError = createAction(
  '[Clientes] clientClientesDelete SetError',
      props<{errors: ValidationError[]}>()
  );

  static clientClientesFiltersFirstGetInit = createAction('[Clientes] clientClientesFiltersFirstGetInit');
  static clientClientesFiltersFirstGetExecute = createAction(
    '[Clientes] clientClientesFiltersFirstGet Execute',
    props<clientClientesFiltersFirstGetRequest>()
  );
  static clientClientesFiltersFirstGetSetData = createAction(
    '[Clientes] clientClientesFiltersFirstGet SetData',
    props<{data: Client }>()
  );

  static clientClientesFiltersFirstGetSuccess = createAction(
    '[Clientes] clientClientesFiltersFirstGet Success',
  );

  static clientClientesFiltersFirstGetSetError = createAction(
  '[Clientes] clientClientesFiltersFirstGet SetError',
      props<{errors: ValidationError[]}>()
  );

  static clientClientesFiltersGetInit = createAction('[Clientes] clientClientesFiltersGetInit');
  static clientClientesFiltersGetExecute = createAction(
    '[Clientes] clientClientesFiltersGet Execute',
    props<clientClientesFiltersGetRequest>()
  );
  static clientClientesFiltersGetSetData = createAction(
    '[Clientes] clientClientesFiltersGet SetData',
    props<{data: Pagination<Client> }>()
  );

  static clientClientesFiltersGetSuccess = createAction(
    '[Clientes] clientClientesFiltersGet Success',
  );

  static clientClientesFiltersGetSetError = createAction(
  '[Clientes] clientClientesFiltersGet SetError',
      props<{errors: ValidationError[]}>()
  );

  static clientClientesGetInit = createAction('[Clientes] clientClientesGetInit');
  static clientClientesGetExecute = createAction(
    '[Clientes] clientClientesGet Execute',
    props<clientClientesGetRequest>()
  );
  static clientClientesGetSetData = createAction(
    '[Clientes] clientClientesGet SetData',
    props<{data: Client }>()
  );

  static clientClientesGetSuccess = createAction(
    '[Clientes] clientClientesGet Success',
  );

  static clientClientesGetSetError = createAction(
  '[Clientes] clientClientesGet SetError',
      props<{errors: ValidationError[]}>()
  );

  static clientClientesIdsGetInit = createAction('[Clientes] clientClientesIdsGetInit');
  static clientClientesIdsGetExecute = createAction(
    '[Clientes] clientClientesIdsGet Execute',
    props<clientClientesIdsGetRequest>()
  );
  static clientClientesIdsGetSetData = createAction(
    '[Clientes] clientClientesIdsGet SetData',
    props<{data: Pagination<Client> }>()
  );

  static clientClientesIdsGetSuccess = createAction(
    '[Clientes] clientClientesIdsGet Success',
  );

  static clientClientesIdsGetSetError = createAction(
  '[Clientes] clientClientesIdsGet SetError',
      props<{errors: ValidationError[]}>()
  );

  static clientClientesPostInit = createAction('[Clientes] clientClientesPostInit');
  static clientClientesPostExecute = createAction(
    '[Clientes] clientClientesPost Execute',
    props<clientClientesPostRequest>()
  );
  static clientClientesPostSetData = createAction(
    '[Clientes] clientClientesPost SetData',
    props<{data: Client }>()
  );

  static clientClientesPostSuccess = createAction(
    '[Clientes] clientClientesPost Success',
  );

  static clientClientesPostSetError = createAction(
  '[Clientes] clientClientesPost SetError',
      props<{errors: ValidationError[]}>()
  );

  static clientClientesPutInit = createAction('[Clientes] clientClientesPutInit');
  static clientClientesPutExecute = createAction(
    '[Clientes] clientClientesPut Execute',
    props<clientClientesPutRequest>()
  );
  static clientClientesPutSetData = createAction(
    '[Clientes] clientClientesPut SetData',
    props<{data: Client }>()
  );

  static clientClientesPutSuccess = createAction(
    '[Clientes] clientClientesPut Success',
  );

  static clientClientesPutSetError = createAction(
  '[Clientes] clientClientesPut SetError',
      props<{errors: ValidationError[]}>()
  );

  static clientClientesRangeDeleteInit = createAction('[Clientes] clientClientesRangeDeleteInit');
  static clientClientesRangeDeleteExecute = createAction(
    '[Clientes] clientClientesRangeDelete Execute',
    props<clientClientesRangeDeleteRequest>()
  );

  static clientClientesRangeDeleteSuccess = createAction(
    '[Clientes] clientClientesRangeDelete Success',
  );

  static clientClientesRangeDeleteSetError = createAction(
  '[Clientes] clientClientesRangeDelete SetError',
      props<{errors: ValidationError[]}>()
  );

  static clientClientesRangePostInit = createAction('[Clientes] clientClientesRangePostInit');
  static clientClientesRangePostExecute = createAction(
    '[Clientes] clientClientesRangePost Execute',
    props<clientClientesRangePostRequest>()
  );
  static clientClientesRangePostSetData = createAction(
    '[Clientes] clientClientesRangePost SetData',
    props<{data: Pagination<Client> }>()
  );

  static clientClientesRangePostSuccess = createAction(
    '[Clientes] clientClientesRangePost Success',
  );

  static clientClientesRangePostSetError = createAction(
  '[Clientes] clientClientesRangePost SetError',
      props<{errors: ValidationError[]}>()
  );

  static clientClientesRangePutInit = createAction('[Clientes] clientClientesRangePutInit');
  static clientClientesRangePutExecute = createAction(
    '[Clientes] clientClientesRangePut Execute',
    props<clientClientesRangePutRequest>()
  );
  static clientClientesRangePutSetData = createAction(
    '[Clientes] clientClientesRangePut SetData',
    props<{data: Pagination<Client> }>()
  );

  static clientClientesRangePutSuccess = createAction(
    '[Clientes] clientClientesRangePut Success',
  );

  static clientClientesRangePutSetError = createAction(
  '[Clientes] clientClientesRangePut SetError',
      props<{errors: ValidationError[]}>()
  );
}
