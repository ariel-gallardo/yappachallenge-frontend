import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '@api/client/models/client.model';
import { NullableFormControl } from '@api/client/models/common/nullable-form-control.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { PutRequest } from '@api/client/services/clientes.service';
import { BehaviorSubject, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-clientes-edit',
  standalone: false,
  templateUrl: './clientes-edit.html',
  styleUrl: './clientes-edit.css',
})
export class ClientesEdit implements OnInit, OnDestroy, AfterViewInit {
  private subs: Subscription;
  public form?: FormGroup<NullableFormControl<Client>>;
  public client$: BehaviorSubject<Client> = new BehaviorSubject({});

  constructor(private fb: FormBuilder,private router: Router, private route: ActivatedRoute, private clientesFacade: ClientesFacade) {
    this.subs = this.clientesFacade.Get$.pipe(filter(c => c?.id !== undefined)).subscribe(client => {
      this.client$.next(client);
    });
    this.subs.add(this.clientesFacade.PutRequest$.pipe(filter(c => c?.client?.id!== undefined)).subscribe(({client}) => {
        this.form = this.fb.group(client!);
         this.subs.add(this.form.valueChanges.subscribe(x => {
           this.clientesFacade.PutRequestUpdateOne({client: x} as PutRequest);
         }))
    }))
    this.subs.add(this.client$.pipe(filter(c => c?.id !== undefined)).subscribe(client => {
      this.clientesFacade.PutRequestUpdate({client});
    }))
    this.subs.add(this.clientesFacade.GetRequest$.subscribe(r => this.clientesFacade.Get()));
  }
  ngOnInit(): void {
    this.clientesFacade.GetInit();
    this.clientesFacade.PutInit();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.clientesFacade.GetDestroy();
    this.clientesFacade.PutDestroy();
  }
  ngAfterViewInit(): void {
    this.subs.add(this.route.params.subscribe((o:any) => {
      this.clientesFacade.GetRequestUpdateOne({
        entityId: o.id
      });
    }));
  }

  public submit(){
    this.clientesFacade.Put();
  }

  public get fechaNacimientoMinControl(): FormControl<string> {
    //@ts-ignore
    return this.form.get('fechaNacimientoMin') as FormControl<string>;
  }

  public get fechaNacimientoMaxControl(): FormControl<string> {
    //@ts-ignore
    return this.form.get('fechaNacimientoMax') as FormControl<string>;
  }
}
