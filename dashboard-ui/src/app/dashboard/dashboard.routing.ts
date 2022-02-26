import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuProperties } from '../shared/properties/menu.properties';
import { DashboardApiComponent } from './api/api.component';
import { DashboardApplicationComponent } from './application/application.component';
import { DashboardPropertyComponent } from './property/property.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: MenuProperties.APPLICATIONS_URL.replace('/', '')
    },
    {
        path: '',
        component: DashboardApplicationComponent,
        loadChildren: () => import('src/app/dashboard/application/application.module').then(m => m.DashboardApplicationModule)
    },
    {
        path: MenuProperties.APIS_URL.replace('/', ''),
        component: DashboardApiComponent,
        loadChildren: () => import('src/app/dashboard/api/api.module').then(m => m.DashboardApiModule)
    },
    {
        path: MenuProperties.PROPERTIES_URL.replace('/', ''),
        component: DashboardPropertyComponent,
        loadChildren: () => import('src/app/dashboard/property/property.module').then(m => m.DashboardPropertyModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
