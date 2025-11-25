import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Client } from '@api/client/models/client.model';
import { NullableFormControl } from '@api/client/models/common/nullable-form-control.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clientes-create',
  standalone: false,
  templateUrl: './clientes-create.html',
  styleUrl: './clientes-create.scss',
})
export class ClientesCreate implements OnInit, OnDestroy, AfterViewInit {

  private subs?: Subscription;

  constructor(private clientesFacade: ClientesFacade, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.clientesFacade.PostInit();
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.clientesFacade.PostDestroy();
  }

  ngAfterViewInit(): void {
    this.subs = this.clientesFacade.PostRequest$.subscribe(({client}) => {
      console.log(client)
      //this.form = this.fb.group(client);
    })
  }

  public form?: FormGroup<NullableFormControl<Client>>;

  public submit(){
    this.clientesFacade.Post();
  }

  public get fechaNacimiento(): FormControl<string> {
    return this.form?.get('fechaNacimiento') as FormControl<string>;
  }
}
