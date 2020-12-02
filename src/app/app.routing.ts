import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsersComponent } from './components/lista-users/lista-users.component';

const appRoutes: Routes = [
    { path: "", component: ListaUsersComponent }
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);
