import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardApiComponent } from './api.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardApiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardApiRoutingModule { }
