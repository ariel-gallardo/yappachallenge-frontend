import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '@api/client/models/client.model';
import { NullableFormControl } from '@api/client/models/common/nullable-form-control.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { GetRequest, PutRequest } from '@api/client/services/clientes.service';
import { BehaviorSubject, filter, Subscription } from 'rxjs';

@Component({
  selector: 'clientes-edit',
  standalone: false,
  templateUrl: './clientes-edit.html',
  styleUrl: './clientes-edit.scss',
})
export class ClientesEdit implements OnInit, OnDestroy, AfterViewInit {
  private subs: Subscription;
  public form?: FormGroup<NullableFormControl<Client>>;
  public client$: BehaviorSubject<Client> = new BehaviorSubject(new Client());

  constructor(private fb: FormBuilder,private router: Router, private route: ActivatedRoute, private clientesFacade: ClientesFacade) {
    this.subs = this.clientesFacade.Get$.pipe(filter(c => c?.id !== undefined)).subscribe(client => {
      this.client$.next(client);
    });
    this.subs.add(this.clientesFacade.PutRequest$.pipe(filter(c => c.clientUpdate?.id!== undefined)).subscribe(({clientUpdate}) => {
      
        this.form = this.fb.group(clientUpdate!);
         this.subs.add(this.form.valueChanges.subscribe(x => {
           this.clientesFacade.PutRequestUpdateOne({clientUpdate: x} as PutRequest);
         }))
      
    }))
    this.subs.add(this.client$.pipe(filter(c => c?.id !== undefined)).subscribe(client => {
      const request = new PutRequest();
      request.clientUpdate = client;
      this.clientesFacade.PutRequestUpdate(request);
    }))
    this.subs.add(this.clientesFacade.GetRequest$.subscribe(r => this.clientesFacade.Get()));
    this.subs.add(this.clientesFacade.PutIsLoaded$.pipe(filter(p => p)).subscribe(x => this.clientesFacade.Get()))
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
      const request = new GetRequest();
      request.entityId = o.id;
      this.clientesFacade.GetRequestUpdateOne(request);
    }));
  }

  public submit(){
    this.clientesFacade.Put();
  }

  public get fechaNacimiento(): FormControl<string> {
    return this.form?.get('fechaNacimiento') as FormControl<string>;
  }

}
