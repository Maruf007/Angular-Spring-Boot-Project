import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { AppCommonModule } from 'src/app//app.common.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
