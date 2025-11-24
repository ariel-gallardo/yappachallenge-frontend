import {createAction, props} from '@ngrx/store';
import {Pagination} from '../../models/common/pagination.model';
import {Response} from '../../models/common/response.model'; 
import {NullableFormControl} from '../../models/common/nullable-form-control.model';
import { FormGroup } from '@angular/forms';
import { BaseResponse } from '@api/client/models/base-response.model';
import { Client } from '@api/client/models/client.model';
import { Client2 } from '@api/client/models/client2.model';
import { ClientUpdate } from '@api/client/models/client-update.model';
import { ClientUpdate2 } from '@api/client/models/client-update2.model';
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
  static DeleteDestroy = createAction('[Clientes] DeleteDestroy');
  static DeleteDataInit = createAction('[Clientes] DeleteDataInit');
  static DeleteExecute = createAction(
    '[Clientes] Delete Execute'
  );
  
  static DeleteRequestUpdate = createAction('[Clientes] Delete RequestUpdate', props<{ request: DeleteRequest }>());
  static DeleteRequestUpdateOne = createAction('[Clientes] Delete RequestUpdateOne', props<{ request: DeleteRequest }>());
  static DeleteRequestUpdateOneSuccess = createAction('[Clientes] Delete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static DeleteRequestUpdateSuccess = createAction('[Clientes] Delete RequestUpdateSuccess', props<{request: DeleteRequest }>());

  static DeleteSuccess = createAction(
    '[Clientes] Delete Success',
  );

  static DeleteSetError = createAction(
  '[Clientes] Delete SetError',
  props<{errors: Array<ValidationError>}>
  );

  static FiltersFirstGetInit = createAction('[Clientes] FiltersFirstGetInit');
  static FiltersFirstGetDestroy = createAction('[Clientes] FiltersFirstGetDestroy');
  static FiltersFirstGetDataInit = createAction('[Clientes] FiltersFirstGetDataInit');
  static FiltersFirstGetExecute = createAction(
    '[Clientes] FiltersFirstGet Execute'
  );
   static FiltersFirstGetSetData = createAction('[Clientes] FiltersFirstGet SetData', props<{data: Client }>()); 
  static FiltersFirstGetRequestUpdate = createAction('[Clientes] FiltersFirstGet RequestUpdate', props<{ request: FiltersFirstGetRequest }>());
  static FiltersFirstGetRequestUpdateOne = createAction('[Clientes] FiltersFirstGet RequestUpdateOne', props<{ request: FiltersFirstGetRequest }>());
  static FiltersFirstGetRequestUpdateOneSuccess = createAction('[Clientes] FiltersFirstGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersFirstGetRequestUpdateSuccess = createAction('[Clientes] FiltersFirstGet RequestUpdateSuccess', props<{request: FiltersFirstGetRequest }>());

  static FiltersFirstGetSuccess = createAction(
    '[Clientes] FiltersFirstGet Success',
  );

  static FiltersFirstGetSetError = createAction(
  '[Clientes] FiltersFirstGet SetError',
  props<{errors: Array<ValidationError>}>
  );

  static FiltersGetInit = createAction('[Clientes] FiltersGetInit');
  static FiltersGetDestroy = createAction('[Clientes] FiltersGetDestroy');
  static FiltersGetDataInit = createAction('[Clientes] FiltersGetDataInit');
  static FiltersGetExecute = createAction(
    '[Clientes] FiltersGet Execute'
  );
   static FiltersGetSetData = createAction('[Clientes] FiltersGet SetData', props<{data: Pagination<Client> }>()); 
  static FiltersGetRequestUpdate = createAction('[Clientes] FiltersGet RequestUpdate', props<{ request: FiltersGetRequest }>());
  static FiltersGetRequestUpdateOne = createAction('[Clientes] FiltersGet RequestUpdateOne', props<{ request: FiltersGetRequest }>());
  static FiltersGetRequestUpdateOneSuccess = createAction('[Clientes] FiltersGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static FiltersGetRequestUpdateSuccess = createAction('[Clientes] FiltersGet RequestUpdateSuccess', props<{request: FiltersGetRequest }>());

  static FiltersGetSuccess = createAction(
    '[Clientes] FiltersGet Success',
  );

  static FiltersGetSetError = createAction(
  '[Clientes] FiltersGet SetError',
  props<{errors: Array<ValidationError>}>
  );
     
    static FiltersGetChangePage = createAction('[Clientes] FiltersGet ChangePage', props<{event: PageEvent }>());

  static GetInit = createAction('[Clientes] GetInit');
  static GetDestroy = createAction('[Clientes] GetDestroy');
  static GetDataInit = createAction('[Clientes] GetDataInit');
  static GetExecute = createAction(
    '[Clientes] Get Execute'
  );
   static GetSetData = createAction('[Clientes] Get SetData', props<{data: Client }>()); 
  static GetRequestUpdate = createAction('[Clientes] Get RequestUpdate', props<{ request: GetRequest }>());
  static GetRequestUpdateOne = createAction('[Clientes] Get RequestUpdateOne', props<{ request: GetRequest }>());
  static GetRequestUpdateOneSuccess = createAction('[Clientes] Get RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static GetRequestUpdateSuccess = createAction('[Clientes] Get RequestUpdateSuccess', props<{request: GetRequest }>());

  static GetSuccess = createAction(
    '[Clientes] Get Success',
  );

  static GetSetError = createAction(
  '[Clientes] Get SetError',
  props<{errors: Array<ValidationError>}>
  );

  static IdsGetInit = createAction('[Clientes] IdsGetInit');
  static IdsGetDestroy = createAction('[Clientes] IdsGetDestroy');
  static IdsGetDataInit = createAction('[Clientes] IdsGetDataInit');
  static IdsGetExecute = createAction(
    '[Clientes] IdsGet Execute'
  );
   static IdsGetSetData = createAction('[Clientes] IdsGet SetData', props<{data: Pagination<Client> }>()); 
  static IdsGetRequestUpdate = createAction('[Clientes] IdsGet RequestUpdate', props<{ request: IdsGetRequest }>());
  static IdsGetRequestUpdateOne = createAction('[Clientes] IdsGet RequestUpdateOne', props<{ request: IdsGetRequest }>());
  static IdsGetRequestUpdateOneSuccess = createAction('[Clientes] IdsGet RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static IdsGetRequestUpdateSuccess = createAction('[Clientes] IdsGet RequestUpdateSuccess', props<{request: IdsGetRequest }>());

  static IdsGetSuccess = createAction(
    '[Clientes] IdsGet Success',
  );

  static IdsGetSetError = createAction(
  '[Clientes] IdsGet SetError',
  props<{errors: Array<ValidationError>}>
  );
     
    static IdsGetChangePage = createAction('[Clientes] IdsGet ChangePage', props<{event: PageEvent }>());

  static PostInit = createAction('[Clientes] PostInit');
  static PostDestroy = createAction('[Clientes] PostDestroy');
  static PostDataInit = createAction('[Clientes] PostDataInit');
  static PostExecute = createAction(
    '[Clientes] Post Execute'
  );
   static PostSetData = createAction('[Clientes] Post SetData', props<{data: Client }>()); 
  static PostRequestUpdate = createAction('[Clientes] Post RequestUpdate', props<{ request: PostRequest }>());
  static PostRequestUpdateOne = createAction('[Clientes] Post RequestUpdateOne', props<{ request: PostRequest }>());
  static PostRequestUpdateOneSuccess = createAction('[Clientes] Post RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PostRequestUpdateSuccess = createAction('[Clientes] Post RequestUpdateSuccess', props<{request: PostRequest }>());

  static PostSuccess = createAction(
    '[Clientes] Post Success',
  );

  static PostSetError = createAction(
  '[Clientes] Post SetError',
  props<{errors: Array<ValidationError>}>
  );

  static PutInit = createAction('[Clientes] PutInit');
  static PutDestroy = createAction('[Clientes] PutDestroy');
  static PutDataInit = createAction('[Clientes] PutDataInit');
  static PutExecute = createAction(
    '[Clientes] Put Execute'
  );
   static PutSetData = createAction('[Clientes] Put SetData', props<{data: Client }>()); 
  static PutRequestUpdate = createAction('[Clientes] Put RequestUpdate', props<{ request: PutRequest }>());
  static PutRequestUpdateOne = createAction('[Clientes] Put RequestUpdateOne', props<{ request: PutRequest }>());
  static PutRequestUpdateOneSuccess = createAction('[Clientes] Put RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static PutRequestUpdateSuccess = createAction('[Clientes] Put RequestUpdateSuccess', props<{request: PutRequest }>());

  static PutSuccess = createAction(
    '[Clientes] Put Success',
  );

  static PutSetError = createAction(
  '[Clientes] Put SetError',
  props<{errors: Array<ValidationError>}>
  );

  static RangeDeleteInit = createAction('[Clientes] RangeDeleteInit');
  static RangeDeleteDestroy = createAction('[Clientes] RangeDeleteDestroy');
  static RangeDeleteDataInit = createAction('[Clientes] RangeDeleteDataInit');
  static RangeDeleteExecute = createAction(
    '[Clientes] RangeDelete Execute'
  );
  
  static RangeDeleteRequestUpdate = createAction('[Clientes] RangeDelete RequestUpdate', props<{ request: RangeDeleteRequest }>());
  static RangeDeleteRequestUpdateOne = createAction('[Clientes] RangeDelete RequestUpdateOne', props<{ request: RangeDeleteRequest }>());
  static RangeDeleteRequestUpdateOneSuccess = createAction('[Clientes] RangeDelete RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangeDeleteRequestUpdateSuccess = createAction('[Clientes] RangeDelete RequestUpdateSuccess', props<{request: RangeDeleteRequest }>());

  static RangeDeleteSuccess = createAction(
    '[Clientes] RangeDelete Success',
  );

  static RangeDeleteSetError = createAction(
  '[Clientes] RangeDelete SetError',
  props<{errors: Array<ValidationError>}>
  );

  static RangePostInit = createAction('[Clientes] RangePostInit');
  static RangePostDestroy = createAction('[Clientes] RangePostDestroy');
  static RangePostDataInit = createAction('[Clientes] RangePostDataInit');
  static RangePostExecute = createAction(
    '[Clientes] RangePost Execute'
  );
   static RangePostSetData = createAction('[Clientes] RangePost SetData', props<{data: Pagination<Client> }>()); 
  static RangePostRequestUpdate = createAction('[Clientes] RangePost RequestUpdate', props<{ request: RangePostRequest }>());
  static RangePostRequestUpdateOne = createAction('[Clientes] RangePost RequestUpdateOne', props<{ request: RangePostRequest }>());
  static RangePostRequestUpdateOneSuccess = createAction('[Clientes] RangePost RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePostRequestUpdateSuccess = createAction('[Clientes] RangePost RequestUpdateSuccess', props<{request: RangePostRequest }>());

  static RangePostSuccess = createAction(
    '[Clientes] RangePost Success',
  );

  static RangePostSetError = createAction(
  '[Clientes] RangePost SetError',
  props<{errors: Array<ValidationError>}>
  );
     
    static RangePostChangePage = createAction('[Clientes] RangePost ChangePage', props<{event: PageEvent }>());

  static RangePutInit = createAction('[Clientes] RangePutInit');
  static RangePutDestroy = createAction('[Clientes] RangePutDestroy');
  static RangePutDataInit = createAction('[Clientes] RangePutDataInit');
  static RangePutExecute = createAction(
    '[Clientes] RangePut Execute'
  );
   static RangePutSetData = createAction('[Clientes] RangePut SetData', props<{data: Pagination<Client> }>()); 
  static RangePutRequestUpdate = createAction('[Clientes] RangePut RequestUpdate', props<{ request: RangePutRequest }>());
  static RangePutRequestUpdateOne = createAction('[Clientes] RangePut RequestUpdateOne', props<{ request: RangePutRequest }>());
  static RangePutRequestUpdateOneSuccess = createAction('[Clientes] RangePut RequestUpdateOneSuccess', props<{key:string,value:any}>());
  static RangePutRequestUpdateSuccess = createAction('[Clientes] RangePut RequestUpdateSuccess', props<{request: RangePutRequest }>());

  static RangePutSuccess = createAction(
    '[Clientes] RangePut Success',
  );

  static RangePutSetError = createAction(
  '[Clientes] RangePut SetError',
  props<{errors: Array<ValidationError>}>
  );
     
    static RangePutChangePage = createAction('[Clientes] RangePut ChangePage', props<{event: PageEvent }>());
}
