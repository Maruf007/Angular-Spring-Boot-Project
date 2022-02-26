import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPropertyComponent } from './property.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardPropertyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardPropertyRoutingModule { }
