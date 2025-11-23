import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '@api/client/models/client.model';
import { NullableFormControl } from '@api/client/models/common/nullable-form-control.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { PutRequest } from '@api/client/services/clientes.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-clientes-edit',
  standalone: false,
  templateUrl: './clientes-edit.html',
  styleUrl: './clientes-edit.css',
})
export class ClientesEdit implements OnInit, OnDestroy, AfterViewInit {
  private subs: Subscription;
  public form?: FormGroup<NullableFormControl<PutRequest>>;
  public client$: BehaviorSubject<Client> = new BehaviorSubject({});

  constructor(private fb: FormBuilder,private router: Router, private route: ActivatedRoute, private clientesFacade: ClientesFacade) {
    this.subs = this.clientesFacade.Get$.subscribe(client => {
      this.client$.next(client);
    });
    this.subs.add(this.client$.subscribe(client => {
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
}
