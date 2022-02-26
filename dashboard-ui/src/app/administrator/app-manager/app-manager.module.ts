import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppManagerRoutingModule } from './app-manager.routing';
import { AppManagerComponent } from './app-manager.component';
import { AppCommonModule } from 'src/app//app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    AppManagerRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [AppManagerComponent]
})
export class AppManagerModule { }
