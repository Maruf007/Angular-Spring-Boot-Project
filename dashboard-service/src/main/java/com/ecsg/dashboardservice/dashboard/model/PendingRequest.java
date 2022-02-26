package com.ecsg.dashboardservice.dashboard.model;

import java.util.List;

public class PendingRequest {
    private String appName;
    private String apiName;
    private String state;
    private List<PendingRequestDetails> pendingRequestDetailsList;

    public PendingRequest() {
    }

    public PendingRequest(String appName, String apiName, String state, List<PendingRequestDetails> pendingRequestDetailsList) {
        this.appName = appName;
        this.apiName = apiName;
        this.state = state;
        this.pendingRequestDetailsList = pendingRequestDetailsList;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public List<PendingRequestDetails> getPendingRequestDetailsList() {
        return pendingRequestDetailsList;
    }

    public void setPendingRequestDetailsList(List<PendingRequestDetails> pendingRequestDetailsList) {
        this.pendingRequestDetailsList = pendingRequestDetailsList;
    }
}
