import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '@api/client/models/client.model';
import { NullableFormControl } from '@api/client/models/common/nullable-form-control.model';
import { Pagination } from '@api/client/models/common/pagination.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { FiltersGetRequest } from '@api/client/services/clientes.service';
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
  public pagination?: Pagination<Client>
  public form?: FormGroup<NullableFormControl<FiltersGetRequest>>;

  constructor(
    private clientesFacade: ClientesFacade,
    private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute) {
    this.subs = this.clientesFacade.FiltersGet$.subscribe(x => this.pagination = x);
    this.subs.add(this.clientesFacade.DeleteRequest$.subscribe(() => {
      this.clientesFacade.Delete();
    }));
    this.subs.add(this.clientesFacade.DeleteIsLoaded$.subscribe(() => {
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
      } else{
        this.clientesFacade.FiltersGet();
      }
    }));

  }

  ngAfterViewInit(): void {
    this.clientesFacade.FiltersGet();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.clientesFacade.FiltersGetDestroy();
    this.clientesFacade.DeleteDestroy();
  }
  ngOnInit(): void {
    this.clientesFacade.FiltersGetInit();
    this.clientesFacade.DeleteInit();
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
    this.router.navigate(['/clientes/editar', entityId], { relativeTo: this.route });
  }

  public eliminar(entityId: number) {
    this.clientesFacade.DeleteRequestUpdateOne({
      entityId
    });
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
