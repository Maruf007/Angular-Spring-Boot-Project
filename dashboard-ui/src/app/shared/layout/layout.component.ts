import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/core/service/application-state.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css']
})
export class LayoutComponent implements OnInit {

  isMenuVisible: boolean;

  constructor(
    private applicationStateService: ApplicationStateService) {
  }

  ngOnInit() {
    
    if (this.applicationStateService.getIsMobileResolution()) {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

}
