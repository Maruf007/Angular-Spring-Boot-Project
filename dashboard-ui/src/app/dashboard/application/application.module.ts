import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardApplicationRoutingModule } from './application.routing';
import { DashboardApplicationComponent } from './application.component';
import { AppCommonModule } from 'src/app//app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardApplicationRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [DashboardApplicationComponent]
})
export class DashboardApplicationModule { }
