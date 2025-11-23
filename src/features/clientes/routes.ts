import { Routes } from "@angular/router";
import { ClientShell } from "./client-shell/client-shell";

const routes: Routes = [
    {path: '', component: ClientShell, children:[
        {path: 'lista' , loadChildren: () => import('@features/clientes/clientes-list/clientes-list-module').then(m => m.ClientesListModule)},
        {path: 'editar/:id' , loadChildren: () => import('@features/clientes/clientes-edit/clientes-edit-module').then(m => m.ClientesEditModule)},
    ]},
];

export default routes;