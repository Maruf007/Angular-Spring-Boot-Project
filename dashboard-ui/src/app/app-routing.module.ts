import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuProperties } from './shared/properties/menu.properties';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: MenuProperties.APPLICATIONS_URL.replace('/', ''),
    loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: MenuProperties.USER_ROLE_UPDATE_URL.replace('/', ''),
    loadChildren: () => import('src/app/administrator/user-manager/user-manager.module').then(m => m.UserManagerModule)
  },
  {
    path: MenuProperties.APPLICATION_ADD_URL.replace('/', ''),
    loadChildren: () => import('src/app/administrator/app-manager/app-manager.module').then(m => m.AppManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
