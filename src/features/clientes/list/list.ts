import { Component, OnDestroy, OnInit } from '@angular/core';
import { Client } from '@api/client/models/client.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit, OnDestroy {
  private subs: Subscription;
  public clientes:Client[] = [];

  displayedColumns: string[] = [
  'nombre',
  'apellido',
  'razonSocial',
  'cuit',
  'fechaNacimiento',
  'telefonoCelular',
  'email'
];


  constructor(private clientesFacade: ClientesFacade) {
    this.subs = this.clientesFacade.clientClientesFiltersGet$.subscribe(x => {
      this.clientes = x.items;
      console.log(this.clientes)
    });
  }

  public get Clientes(){
    return this.clientes;
  }

  ngOnDestroy(): void {
    this.clientesFacade.Init();
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.clientesFacade.clientClientesFiltersGet({});
  }
  
}
