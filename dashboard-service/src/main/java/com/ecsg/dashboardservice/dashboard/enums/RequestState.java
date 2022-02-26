package com.ecsg.dashboardservice.dashboard.enums;

public enum RequestState {
    IN_REVIEW("IN REVIEW"),
    IN_QA_VERIFICATION("IN QA VERIFICATION"),
    IN_QA_APPROVAL("IN QA APPROVAL"),
    IN_PERF("IN PERF"),
    IN_PRE_PROD("IN PRE PROD"),
    IN_PROD("IN PROD");

    public final String state;

    private RequestState(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}
