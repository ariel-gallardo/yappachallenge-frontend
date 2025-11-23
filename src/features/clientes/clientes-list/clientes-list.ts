import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PageEvent } from '@angular/material/paginator';
import { Client } from '@api/client/models/client.model';
import { NullableFormControl } from '@api/client/models/common/nullable-form-control.model';
import { Pagination } from '@api/client/models/common/pagination.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { FiltersGetRequest } from '@api/client/services/clientes.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'clientes-list',
  standalone: false,
  templateUrl: './clientes-list.html',
  styleUrl: './clientes-list.css',
})
export class ClientesList implements OnInit, OnDestroy, AfterViewInit {

  private subs: Subscription;
  private clientes: Client[] = [];
  public pagination?: Pagination<Client>
  public form?: FormGroup<NullableFormControl<FiltersGetRequest>>;
  private inputSubject = new Subject<{ field: string; value: any }>();


  constructor(private clientesFacade: ClientesFacade, private fb: FormBuilder) {
    this.subs = this.clientesFacade.FiltersGet$.subscribe(x => this.pagination = x);
    this.subs.add(this.clientesFacade.DeleteIsLoaded$.subscribe( x => {
      this.clientesFacade.FiltersGet();
    }));
    this.subs.add(this.clientesFacade.FiltersGetRequest$.subscribe(x => {
      if (!this.form) {
        this.form = this.fb.group(x,{
          updateOn: 'change'
        });
        this.subs.add(this.form.valueChanges.subscribe(x => {
          this.clientesFacade.FiltersGetRequestUpdateOne(x as FiltersGetRequest);
        }))
      } else {
        this.clientesFacade.FiltersGet();
      }
    }));

  }

  onChangeInput(event: Event | MatDatepickerInputEvent<Date>, field: string) {
    let value: any;

    if ('value' in event) {
      value = event.value;
      if (value != null) {
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

  ngAfterViewInit(): void {
    //this.clientesFacade.FiltersGet();
  }

  ngOnDestroy(): void {
    this.clientesFacade.Init();
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.clientesFacade.FiltersGetInit();
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
    //this.clientesFacade.Delete({ entityId });
  }

  onPageChange(e: PageEvent) {
    this.clientesFacade.FiltersGetChangePage(e);
  }

  get fechaNacimientoMinControl(): FormControl<string> {
    return this.form?.get('fechaNacimientoMin') as FormControl<string>;
  }

  get fechaNacimientoMaxControl(): FormControl<string> {
    return this.form?.get('fechaNacimientoMax') as FormControl<string>;
  }
}
