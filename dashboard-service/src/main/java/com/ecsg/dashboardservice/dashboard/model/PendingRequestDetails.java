package com.ecsg.dashboardservice.dashboard.model;

public class PendingRequestDetails {
    private String propertyName;
    private String originalValue;
    private String updatedValue;

    public PendingRequestDetails() {
    }

    public PendingRequestDetails(String propertyName, String originalValue, String updatedValue) {
        this.propertyName = propertyName;
        this.originalValue = originalValue;
        this.updatedValue = updatedValue;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public String getOriginalValue() {
        return originalValue;
    }

    public void setOriginalValue(String originalValue) {
        this.originalValue = originalValue;
    }

    public String getUpdatedValue() {
        return updatedValue;
    }

    public void setUpdatedValue(String updatedValue) {
        this.updatedValue = updatedValue;
    }
}
