import { Component, OnInit } from '@angular/core';
import { AppManagerService } from 'src/app/administrator/app-manager/app-manager.service';
import { Application } from 'src/app/administrator/app-manager/application.model';
import { CaptionProperties } from 'src/app/shared/properties/caption.properties';
import { Api } from './api.model';
import { DashboardService } from '../dashboard.service';
import { RouteStateService } from 'src/app/core/service/route-state.service';
import { MenuProperties } from 'src/app/shared/properties/menu.properties';
import { CoreUtils } from 'src/app/core/utils/core.utils';

@Component({
  selector: 'dashboard-api',
  templateUrl: 'api.component.html',
  styleUrls: ['api.component.css']
})
export class DashboardApiComponent implements OnInit {
  editBtn: string = CaptionProperties.editBtn;
  saveBtn: string = CaptionProperties.saveBtn;
  viewBtn: string = CaptionProperties.viewBtn;
  cancelBtn: string = CaptionProperties.cancelBtn;
  saveChangesBtn: string = CaptionProperties.saveChangesBtn;

  noDataFoundCaption: string = CaptionProperties.noDataFound;

  apiListDashboardCaption: string = CaptionProperties.apiListDashboard;
  appDetailsCaption: string = CaptionProperties.applicationDetails;
  propertyCaption: string = CaptionProperties.property;
  valueCaption: string = CaptionProperties.value;
  actionCaption: string = CaptionProperties.action;
  applicationNameCaption: string = CaptionProperties.applicationName;
  clientCaption: string = CaptionProperties.client;
  typeCaption: string = CaptionProperties.type;
  createdOnCaption: string = CaptionProperties.createdOn;
  repoUrlCaption: string = CaptionProperties.repoUrl;

  apiListCaption: string = CaptionProperties.apiList;
  apiNameCaption: string = CaptionProperties.apiName;
  clientsCaption: string = CaptionProperties.clients;
  statusCaption: string = CaptionProperties.status;
  onOffCaption: string = CaptionProperties.onOff;

  isEditAppName: boolean = false;
  isEditClient: boolean = false;
  isEditType: boolean = false;
  isEditCreateDate: boolean = false;
  isEditRepoUrl: boolean = false;

  applicationOld: Application = new Application();
  application: Application = new Application();

  constructor(private dashboardService: DashboardService,
    private appManagerService: AppManagerService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    var routeState = this.routeStateService.getCurrent();
    if (routeState.data != null) {
      this.getApplication(routeState.data);
    }
  }

  getApplication(appId: number) {
    this.appManagerService.getApp(appId).subscribe((application: Application) => {
      this.application = application;
      this.application.createDate = CoreUtils.formatDateYYYYMMDD(this.application.createDate);
      this.applicationOld = CoreUtils.cloneObject(this.application);
    }, error => {

    });
  }

  gotoApiDetails(api: Api) {
    this.routeStateService.add(api.name, MenuProperties.COMMON_URL + MenuProperties.APPLICATIONS_URL + MenuProperties.PROPERTIES_URL, api.id, false);
  }

  cancelChanges() {
    this.application = CoreUtils.cloneObject(this.applicationOld);
  }
}
