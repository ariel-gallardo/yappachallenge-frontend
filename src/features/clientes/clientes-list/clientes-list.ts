import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PageEvent } from '@angular/material/paginator';
import { Client } from '@api/client/models/client.model';
import { Pagination } from '@api/client/models/common/pagination.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { clientClientesFiltersGetRequest } from '@api/client/services/clientes.service';
import { debounceTime, Subject, Subscription } from 'rxjs';

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
  form: any;
  private inputSubject = new Subject<{ field: string; value: any }>();


  constructor(private clientesFacade: ClientesFacade, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', []],
      apellido: ['', []],
      razonSocial: ['', []],
      cuit: ['', []],
      fechaNacimientoMin: ['',],
      fechaNacimientoMax: ['',],
      telefonoCelular: ['', []],
      email: ['', []]
    });
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
    this.subs.add(this.inputSubject
      .pipe(debounceTime(300))
      .subscribe(({ field, value }) => {
        this.searchByFilter(field, value);
      }));
  }

onChangeInput(event: Event | MatDatepickerInputEvent<Date>, field: string) {
  let value: any;

  if ('value' in event) {
    value = event.value;
    if(value != null){
      const dia = value.getDate().toString().padStart(2, '0');
      const mes = (value.getMonth() + 1).toString().padStart(2, '0');
      const anio = value.getFullYear();
      value = `${dia}/${mes}/${anio}`;
    }
  } else {
    value = (event.target as HTMLInputElement).value;
  }

  this.inputSubject.next({ field, value });
}


searchByFilter(field: string, value: string) {
  this.filters = {
    ...this.filters,
    [field]: value
  };
  this.clientesFacade.clientClientesFiltersGet(this.filters);
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

  public editar(entityId: number) {

  }

  public eliminar(entityId: number) {
    this.clientesFacade.clientClientesDelete({ entityId });
  }

  onPageChange(e: PageEvent) {
    this.filters.page = e.pageIndex + 1;
    this.filters.pageSize = e.pageSize;
    this.clientesFacade.clientClientesFiltersGet(this.filters);
  }


}
