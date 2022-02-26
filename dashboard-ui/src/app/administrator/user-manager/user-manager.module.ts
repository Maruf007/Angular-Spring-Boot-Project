import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerRoutingModule } from './user-manager.routing';
import { UserManagerComponent } from './user-manager.component';
import { AppCommonModule } from 'src/app//app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    UserManagerRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [UserManagerComponent]
})
export class UserManagerModule { }
