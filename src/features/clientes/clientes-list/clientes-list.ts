import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Client } from '@api/client/models/client.model';
import { Pagination } from '@api/client/models/common/pagination.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { clientClientesFiltersGetRequest } from '@api/client/services/clientes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientes-list',
  standalone: false,
  templateUrl: './clientes-list.html',
  styleUrl: './clientes-list.css',
})
export class ClientesList implements OnInit, OnDestroy, AfterViewInit {

  private subs: Subscription;
  private clientes: Client[] = [];
  private filters: clientClientesFiltersGetRequest;
  public pagination: Pagination<Client>

  constructor(private clientesFacade: ClientesFacade) {
    this.pagination = {
      items: [],
      currentPage: 0,
      pageSize: 0,
      totalCount: 0,
      totalPages: 0
    };
    this.filters = {};
    this.subs = this.clientesFacade.clientClientesFiltersGet$.subscribe(x => {
      this.pagination = x;
    });
    this.subs.add(this.clientesFacade.clientClientesDeleteIsLoaded$.subscribe(x => {
      this.clientesFacade.clientClientesFiltersGet(this.filters);
    }))
  }
  

  ngAfterViewInit(): void {
    this.clientesFacade.clientClientesFiltersGet(this.filters);
  }

  ngOnDestroy(): void {
    this.clientesFacade.Init();
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.clientesFacade.Init();
  }

  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'razonSocial',
    'cuit',
    'fechaNacimiento',
    'telefonoCelular',
    'email',
    'acciones'
  ];

  public get Clientes() {
    return this.clientes;
  }

  public editar(entityId:number){

  }

  public eliminar(entityId:number){
    this.clientesFacade.clientClientesDelete({entityId});
  }

onPageChange(e: PageEvent) {
  this.filters.page = e.pageIndex + 1;
  this.filters.pageSize = e.pageSize;
  this.clientesFacade.clientClientesFiltersGet(this.filters);
}


}
