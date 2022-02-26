import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { RouteStateService } from 'src/app/core/service/route-state.service';
import { CoreUtils } from 'src/app/core/utils/core.utils';
import { CaptionProperties } from 'src/app/shared/properties/caption.properties';
import { Api } from '../api/api.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'dashboard-property',
  templateUrl: 'property.component.html',
  styleUrls: ['property.component.css']
})
export class DashboardPropertyComponent implements OnInit {
  cancelBtn: string = CaptionProperties.cancelBtn;
  saveChangesBtn: string = CaptionProperties.saveChangesBtn;
  editBtn: string = CaptionProperties.editBtn;
  saveBtn: string = CaptionProperties.saveBtn;

  noDataFoundCaption: string = CaptionProperties.noDataFound;

  apiDashboard: string = CaptionProperties.apiDashboard;
  apiPropertiesCaption: string = CaptionProperties.apiProperties;
  propertyNameCaption: string = CaptionProperties.propertyName;
  valueCaption: string = CaptionProperties.value;
  actionCaption: string = CaptionProperties.action;
  featuresCaption: string = CaptionProperties.features;
  featureCaption: string = CaptionProperties.features;
  statusCaption: string = CaptionProperties.status;
  onOffCaption: string = CaptionProperties.onOff;

  apiOld: Api = new Api();
  api: Api = new Api();

  features: TreeNode[];
  constructor(private dashboardService: DashboardService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    var routeState = this.routeStateService.getCurrent();
    if (routeState.data != null) {
      this.getApi(routeState.data);
    }
  }

  getApi(id: number) {
    this.dashboardService.getApi(id).subscribe((api: Api) => {
      this.api = api;
      this.apiOld = CoreUtils.cloneObject(api);
      }, error => {
  
      });
  }

  cancelChanges() {
    this.api = CoreUtils.cloneObject(this.apiOld);
  }
}
