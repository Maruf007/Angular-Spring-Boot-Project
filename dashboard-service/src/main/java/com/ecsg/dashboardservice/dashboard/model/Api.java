package com.ecsg.dashboardservice.dashboard.model;

import java.util.List;

public class Api {
    private Long id;
    private String name;
    private String client;
    private boolean status;
    private boolean onOff;
    private Long applicationId;
    private List<Property> propertyList;
    private List<Feature> featureList;

    public Api() {
    }

    public Api(Long id, String name, String client, boolean status, boolean onOff, Long applicationId) {
        this.id = id;
        this.name = name;
        this.client = client;
        this.status = status;
        this.onOff = onOff;
        this.applicationId = applicationId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public boolean isOnOff() {
        return onOff;
    }

    public void setOnOff(boolean onOff) {
        this.onOff = onOff;
    }

    public Long getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(Long applicationId) {
        this.applicationId = applicationId;
    }

    public List<Property> getPropertyList() {
        return propertyList;
    }

    public void setPropertyList(List<Property> propertyList) {
        this.propertyList = propertyList;
    }

    public List<Feature> getFeatureList() {
        return featureList;
    }

    public void setFeatureList(List<Feature> featureList) {
        this.featureList = featureList;
    }
}
