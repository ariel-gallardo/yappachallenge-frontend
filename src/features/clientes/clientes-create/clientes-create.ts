import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Client } from '@api/client/models/client.model';
import { NullableFormControl } from '@api/client/models/common/nullable-form-control.model';
import { ClientesFacade } from '@api/client/redux/clientes/clientes.facade';
import { ValidationErrorsService } from '@features/validation-errors/validation-errors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clientes-create',
  standalone: false,
  templateUrl: './clientes-create.html',
  styleUrl: './clientes-create.scss',
})
export class ClientesCreate implements OnInit, OnDestroy {

  private subs: Subscription;
  public form: FormGroup<NullableFormControl<Client>>;
  constructor(private clientesFacade: ClientesFacade, private fb: FormBuilder, private errorService: ValidationErrorsService) {
    this.form = fb.group(new Client());
    this.subs = this.form.valueChanges.subscribe((client) => this.clientesFacade.PostRequestUpdate({client}));
    this.subs.add(this.clientesFacade.PostErrors$.subscribe(errors => {
      this.errorService.applyErrors(this.form,errors);
      console.log(this.form)
    }));
  }

  ngOnInit(): void {
    this.clientesFacade.PostInit();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.clientesFacade.PostInit();
  }

  public submit(){
    this.clientesFacade.Post();
  }

  public get fechaNacimiento(): FormControl<string> {
    return this.form.get('fechaNacimiento') as FormControl<string>;
  }
}
