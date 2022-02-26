import { Component } from '@angular/core';
import {RouteStateService} from '../app/core/service/route-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-ui';

  constructor(private routeStateService: RouteStateService) {
      }

  gotoDashboard() {
    this.routeStateService.add('Dashboard',  '/dashboard', null, false);
  }
}
