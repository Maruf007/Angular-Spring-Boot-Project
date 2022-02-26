import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardApiRoutingModule } from './api.routing';
import { DashboardApiComponent } from './api.component';
import { AppCommonModule } from 'src/app//app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardApiRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [DashboardApiComponent]
})
export class DashboardApiModule { }
