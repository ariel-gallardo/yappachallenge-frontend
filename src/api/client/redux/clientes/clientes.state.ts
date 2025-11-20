import { BaseResponse } from '@api/client/models/base-response.model';
import { Client } from '@api/client/models/client.model';
import { ValidationError } from '@api/client/models/validation-error.model';
import {Response} from '@api/client/models/common/response.model';
import {StateDetail, StateDetailBase} from '@api/client/models/common/state-detail.model';
import {Pagination} from '@api/client/models/common/pagination.model';

export default interface State
{
        clientClientesDelete: StateDetailBase
        clientClientesFiltersFirstGet: StateDetail<Client>
        clientClientesFiltersGet: StateDetail<Pagination<Client>>
        clientClientesGet: StateDetail<Client>
        clientClientesIdsGet: StateDetail<Pagination<Client>>
        clientClientesPost: StateDetail<Client>
        clientClientesPut: StateDetail<Client>
        clientClientesRangeDelete: StateDetailBase
        clientClientesRangePost: StateDetail<Pagination<Client>>
        clientClientesRangePut: StateDetail<Pagination<Client>>
}
