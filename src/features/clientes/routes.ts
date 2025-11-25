import { Routes } from "@angular/router";
import { ClientShell } from "./client-shell/client-shell";
import { ClientesCreate } from "./clientes-create/clientes-create";

const routes: Routes = [
    {path: '', component: ClientShell, children:[
        {path: 'lista' , loadChildren: () => import('@features/clientes/clientes-list/clientes-list-module').then(m => m.ClientesListModule)},
        {path: 'editar/:id' , loadChildren: () => import('@features/clientes/clientes-edit/clientes-edit-module').then(m => m.ClientesEditModule)},
        {path: 'crear' , loadChildren: () => import('@features/clientes/clientes-create/clientes-create-module').then(m => m.ClientesCreateModule)},
    ]},
];

export default routes;