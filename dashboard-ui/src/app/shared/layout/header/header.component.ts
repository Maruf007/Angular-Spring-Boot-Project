import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/core/service/route-state.service';
import { SessionService } from 'src/app/core/service/session.service';
import { User } from 'src/app/core/model/user.model';
import { UserIdleService } from 'angular-user-idle';
import { UserContextService } from 'src/app/core/service/user-context.service';
import { CaptionProperties } from '../../properties/caption.properties';
import { MenuProperties } from '../../properties/menu.properties';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  dashboardTitleCaption: string = CaptionProperties.dashboardTitle;

  user: User;

  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private userContextService: UserContextService,) {
  }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });

    this.loadProperties();
  }

  loadProperties() {
  }

  gotoProfile() {
    this.routeStateService.add(CaptionProperties.updateUserRoleTitle, MenuProperties.COMMON_URL + MenuProperties.USER_ROLE_UPDATE_URL, this.user, false);
  }

  logout() {
    this.userIdle.stopWatching();
    this.routeStateService.removeAll();
    this.userContextService.logout();
    this.sessionService.removeItem('active-menu');
    this.router.navigate(['/login']);
  }
  
}
