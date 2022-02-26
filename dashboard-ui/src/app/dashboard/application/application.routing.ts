import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardApplicationComponent } from './application.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardApplicationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardApplicationRoutingModule { }
