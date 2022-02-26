import { Component, OnInit } from '@angular/core';
import { AppManagerService } from 'src/app/administrator/app-manager/app-manager.service';
import { Application } from 'src/app/administrator/app-manager/application.model';
import { User } from 'src/app/core/model/user.model';
import { RouteStateService } from 'src/app/core/service/route-state.service';
import { SessionService } from 'src/app/core/service/session.service';
import { CaptionProperties } from 'src/app/shared/properties/caption.properties';
import { MenuProperties } from 'src/app/shared/properties/menu.properties';
import { DashboardService } from '../dashboard.service';
import { PendingRequest } from './pending-request.model';
import { RequestStatus } from './request-status.enum';

@Component({
  selector: 'dashboard-application',
  templateUrl: 'application.component.html',
  styleUrls: ['application.component.css']
})
export class DashboardApplicationComponent implements OnInit {
  deleteBtn: string = CaptionProperties.deleteBtn;
  viewBtn: string = CaptionProperties.viewBtn;
  updateUserBtn: string = CaptionProperties.updateUserBtn;
  devApproveBtn: string = CaptionProperties.devApproveBtn;
  qaVerifyBtn: string = CaptionProperties.qaVerifyBtn;
  qaApproveBtn: string = CaptionProperties.qaApproveBtn;
  pushToPerfBtn: string = CaptionProperties.pushToPerfBtn;
  pushToPreProdBtn: string = CaptionProperties.pushToPreProdBtn;
  pushToProdBtn: string = CaptionProperties.pushToProdBtn;

  noDataFoundCaption: string = CaptionProperties.noDataFound;

  applicationDashboarCaption: string = CaptionProperties.applicationDashboard;
  applicationsCaption: string = CaptionProperties.applications;
  bffApplicatonCaption: string = CaptionProperties.bffApplication;
  typeCaption: string = CaptionProperties.type;
  clientsCaption: string = CaptionProperties.clients;
  createdAtCaption: string = CaptionProperties.createdAt;
  updatedOnCaption: string = CaptionProperties.updatedOn;
  actionCaption: string = CaptionProperties.action;
  pendingRequestsCaption: string = CaptionProperties.pendingRequests;
  applicationNameCaption: string = CaptionProperties.applicationName;
  apiCaption: string = CaptionProperties.api;
  changeOverviewCaption: string = CaptionProperties.changeOverview;
  stateCaption: string = CaptionProperties.state;
  propertyNameCaption: string = CaptionProperties.propertyName;
  originalValueCaption: string = CaptionProperties.originalValue;
  updatedValueCaption: string = CaptionProperties.updatedValue;

  inReview = RequestStatus.IN_REVIEW;
  inQAVarify = RequestStatus.IN_QA_VERIFICATION;
  inQAApprove = RequestStatus.IN_QA_APPROVAL;
  inPref = RequestStatus.IN_PERF;
  inPreProd = RequestStatus.IN_PRE_PROD;
  inProd = RequestStatus.IN_PROD;

  user: User;
  applications: Application[] = [];
  pendingRequests: PendingRequest[] = [];
  constructor(private dashboardService: DashboardService,
    private appManagerService: AppManagerService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    this.getApplicationList();
    this.getPendingRequests();
  }

  getApplicationList() {
    this.appManagerService.getAppList().subscribe((applications: Application[]) => {
      this.applications = applications;
    }, error => {

    });
  }

  getPendingRequests() {
    this.dashboardService.getPendingRequests().subscribe((pendingRequests: PendingRequest[]) => {
      this.pendingRequests = pendingRequests;
    }, error => {

    });
  }

  approveRequest(requestStatus: RequestStatus) {

  }

  gotoProfile() {
    this.routeStateService.add(CaptionProperties.updateUserRoleTitle, MenuProperties.COMMON_URL + MenuProperties.USER_ROLE_UPDATE_URL, this.user, false);
  }

  gotoDashboardApi(application: Application) {
    this.routeStateService.add(application.name, MenuProperties.COMMON_URL + MenuProperties.APPLICATIONS_URL + MenuProperties.APIS_URL, application.id, false);
  }
}
