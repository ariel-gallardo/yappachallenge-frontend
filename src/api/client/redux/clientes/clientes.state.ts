import { BaseResponse } from '@api/client/models/base-response.model';
import { Client } from '@api/client/models/client.model';
import { Client2 } from '@api/client/models/client2.model';
import { ValidationError } from '@api/client/models/validation-error.model';
import {Response} from '@api/client/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/client/models/common/state-detail.model';
import {Pagination} from '@api/client/models/common/pagination.model';

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

export default interface State
{
        Delete: StateDetailBase<DeleteRequest>
        FiltersFirstGet: StateDetail<Client,FiltersFirstGetRequest>
        FiltersGet: StateDetail<Pagination<Client>,FiltersGetRequest>
        Get: StateDetail<Client,GetRequest>
        IdsGet: StateDetail<Pagination<Client>,IdsGetRequest>
        Post: StateDetail<Client,PostRequest>
        Put: StateDetail<Client,PutRequest>
        RangeDelete: StateDetailBase<RangeDeleteRequest>
        RangePost: StateDetail<Pagination<Client>,RangePostRequest>
        RangePut: StateDetail<Pagination<Client>,RangePutRequest>
}
