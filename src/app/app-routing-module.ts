import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduxCoreModule } from '@api/client/redux/core.module';

const routes: Routes = [
  { path: '', children: [
    {path: 'clientes', loadChildren: () => import('@features/clientes/clientes-module').then(m => m.ClientesModule)},
  ]}
];

@NgModule({
  imports: [ReduxCoreModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
