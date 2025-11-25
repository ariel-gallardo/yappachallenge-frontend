import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { BaseResponse } from '@api/client/models/base-response.model';
import { Client } from '@api/client/models/client.model';
import { ClientUpdate } from '@api/client/models/client-update.model';
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
import { PageEvent } from '@angular/material/paginator';

export class ClientesActions {

  static Init = createAction('[Clientes] Init');

  static DeleteInit = createAction('[Clientes] DeleteInit');
  static DeleteDataInit = createAction('[Clientes] DeleteDataInit');
  static DeleteExecute = createAction(
    '[Clientes] Delete Execute'
  );
  
  static DeleteRequestUpdate = createAction('[Clientes] Delete RequestUpdate', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOne = createAction('[Clientes] Delete RequestUpdateOne', props<{ request: Partial<DeleteRequest> }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Clientes] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteRequestUpdateSuccess = createAction('[Clientes] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());

  static DeleteSuccess = createAction(
    '[Clientes] Delete Success',
  );

  static DeleteSetError = createAction(
  '[Clientes] Delete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersFirstGetInit = createAction('[Clientes] FiltersFirstGetInit');
  static FiltersFirstGetDataInit = createAction('[Clientes] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction(
    '[Clientes] FiltersFirstGet Execute'
  );
   static FiltersFirstGetSetData = createAction('[Clientes] FiltersFirstGet SetData', props<{data: Client }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Clientes] FiltersFirstGet RequestUpdate', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Clientes] FiltersFirstGet RequestUpdateOne', props<{ request: Partial<FiltersFirstGetRequest> }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Clientes] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Clientes] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());

  static FiltersFirstGetSuccess = createAction(
    '[Clientes] FiltersFirstGet Success',
  );

  static FiltersFirstGetSetError = createAction(
  '[Clientes] FiltersFirstGet SetError',
  props<{errors: ValidationError[][]}>()
  );

  static FiltersGetInit = createAction('[Clientes] FiltersGetInit');
  static FiltersGetDataInit = createAction('[Clientes] FiltersGetDataInit');
  static FiltersGetExecute = createAction(
    '[Clientes] FiltersGet Execute'
  );
   static FiltersGetSetData = createAction('[Clientes] FiltersGet SetData', props<{data: Pagination<Client> }>()); 
  static FiltersGetRequestUpdate = createAction('[Clientes] FiltersGet RequestUpdate', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOne = createAction('[Clientes] FiltersGet RequestUpdateOne', props<{ request: Partial<FiltersGetRequest> }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Clientes] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetRequestUpdateSuccess = createAction('[Clientes] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());

  static FiltersGetSuccess = createAction(
    '[Clientes] FiltersGet Success',
  );

  static FiltersGetSetError = createAction(
  '[Clientes] FiltersGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static FiltersGetChangePage = createAction('[Clientes] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Clientes] GetInit');
  static GetDataInit = createAction('[Clientes] GetDataInit');
  static GetExecute = createAction(
    '[Clientes] Get Execute'
  );
   static GetSetData = createAction('[Clientes] Get SetData', props<{data: Client }>()); 
  static GetRequestUpdate = createAction('[Clientes] Get RequestUpdate', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOne = createAction('[Clientes] Get RequestUpdateOne', props<{ request: Partial<GetRequest> }>());
  static GetRequestUpdateOneSuccess = createAction('[Clientes] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetRequestUpdateSuccess = createAction('[Clientes] Get RequestUpdateSuccess', props<{request: GetRequest }>());

  static GetSuccess = createAction(
    '[Clientes] Get Success',
  );

  static GetSetError = createAction(
  '[Clientes] Get SetError',
  props<{errors: ValidationError[][]}>()
  );

  static IdsGetInit = createAction('[Clientes] IdsGetInit');
  static IdsGetDataInit = createAction('[Clientes] IdsGetDataInit');
  static IdsGetExecute = createAction(
    '[Clientes] IdsGet Execute'
  );
   static IdsGetSetData = createAction('[Clientes] IdsGet SetData', props<{data: Pagination<Client> }>()); 
  static IdsGetRequestUpdate = createAction('[Clientes] IdsGet RequestUpdate', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOne = createAction('[Clientes] IdsGet RequestUpdateOne', props<{ request: Partial<IdsGetRequest> }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Clientes] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetRequestUpdateSuccess = createAction('[Clientes] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());

  static IdsGetSuccess = createAction(
    '[Clientes] IdsGet Success',
  );

  static IdsGetSetError = createAction(
  '[Clientes] IdsGet SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static IdsGetChangePage = createAction('[Clientes] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Clientes] PostInit');
  static PostDataInit = createAction('[Clientes] PostDataInit');
  static PostExecute = createAction(
    '[Clientes] Post Execute'
  );
   static PostSetData = createAction('[Clientes] Post SetData', props<{data: Client }>()); 
  static PostRequestUpdate = createAction('[Clientes] Post RequestUpdate', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOne = createAction('[Clientes] Post RequestUpdateOne', props<{ request: Partial<PostRequest> }>());
  static PostRequestUpdateOneSuccess = createAction('[Clientes] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostRequestUpdateSuccess = createAction('[Clientes] Post RequestUpdateSuccess', props<{request: PostRequest }>());

  static PostSuccess = createAction(
    '[Clientes] Post Success',
  );

  static PostSetError = createAction(
  '[Clientes] Post SetError',
  props<{errors: ValidationError[][]}>()
  );

  static PutInit = createAction('[Clientes] PutInit');
  static PutDataInit = createAction('[Clientes] PutDataInit');
  static PutExecute = createAction(
    '[Clientes] Put Execute'
  );
   static PutSetData = createAction('[Clientes] Put SetData', props<{data: Client }>()); 
  static PutRequestUpdate = createAction('[Clientes] Put RequestUpdate', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOne = createAction('[Clientes] Put RequestUpdateOne', props<{ request: Partial<PutRequest> }>());
  static PutRequestUpdateOneSuccess = createAction('[Clientes] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutRequestUpdateSuccess = createAction('[Clientes] Put RequestUpdateSuccess', props<{request: PutRequest }>());

  static PutSuccess = createAction(
    '[Clientes] Put Success',
  );

  static PutSetError = createAction(
  '[Clientes] Put SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangeDeleteInit = createAction('[Clientes] RangeDeleteInit');
  static RangeDeleteDataInit = createAction('[Clientes] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction(
    '[Clientes] RangeDelete Execute'
  );
  
  static RangeDeleteRequestUpdate = createAction('[Clientes] RangeDelete RequestUpdate', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOne = createAction('[Clientes] RangeDelete RequestUpdateOne', props<{ request: Partial<RangeDeleteRequest> }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Clientes] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Clientes] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());

  static RangeDeleteSuccess = createAction(
    '[Clientes] RangeDelete Success',
  );

  static RangeDeleteSetError = createAction(
  '[Clientes] RangeDelete SetError',
  props<{errors: ValidationError[][]}>()
  );

  static RangePostInit = createAction('[Clientes] RangePostInit');
  static RangePostDataInit = createAction('[Clientes] RangePostDataInit');
  static RangePostExecute = createAction(
    '[Clientes] RangePost Execute'
  );
   static RangePostSetData = createAction('[Clientes] RangePost SetData', props<{data: Pagination<Client> }>()); 
  static RangePostRequestUpdate = createAction('[Clientes] RangePost RequestUpdate', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOne = createAction('[Clientes] RangePost RequestUpdateOne', props<{ request: Partial<RangePostRequest> }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Clientes] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostRequestUpdateSuccess = createAction('[Clientes] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());

  static RangePostSuccess = createAction(
    '[Clientes] RangePost Success',
  );

  static RangePostSetError = createAction(
  '[Clientes] RangePost SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePostChangePage = createAction('[Clientes] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Clientes] RangePutInit');
  static RangePutDataInit = createAction('[Clientes] RangePutDataInit');
  static RangePutExecute = createAction(
    '[Clientes] RangePut Execute'
  );
   static RangePutSetData = createAction('[Clientes] RangePut SetData', props<{data: Pagination<Client> }>()); 
  static RangePutRequestUpdate = createAction('[Clientes] RangePut RequestUpdate', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOne = createAction('[Clientes] RangePut RequestUpdateOne', props<{ request: Partial<RangePutRequest> }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Clientes] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutRequestUpdateSuccess = createAction('[Clientes] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());

  static RangePutSuccess = createAction(
    '[Clientes] RangePut Success',
  );

  static RangePutSetError = createAction(
  '[Clientes] RangePut SetError',
  props<{errors: ValidationError[][]}>()
  );
     
    static RangePutChangePage = createAction('[Clientes] RangePut ChangePage', props<{event: PageEvent }>());
}
