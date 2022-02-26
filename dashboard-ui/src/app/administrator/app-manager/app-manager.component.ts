import { Component, OnInit } from '@angular/core';
import { CaptionProperties } from 'src/app/shared/properties/caption.properties';
import { AppManagerService } from './app-manager.service';
import { Application } from './application.model';

@Component({
  selector: 'app-manager',
  templateUrl: 'app-manager.component.html',
  styleUrls: ['app-manager.component.css']
})
export class AppManagerComponent implements OnInit {
  addNewApplicationCaption: string = CaptionProperties.addNewApplication;

  applications: Application[] = [];
  cols: any[];
  constructor(private appManagerService: AppManagerService) { }

  ngOnInit() {
    this.getAppList();
  }

  getAppList() {
    this.appManagerService.getAppList().subscribe((applications: Application[]) => {
      this.applications = applications;
    }, error => {

    });
  }
}
