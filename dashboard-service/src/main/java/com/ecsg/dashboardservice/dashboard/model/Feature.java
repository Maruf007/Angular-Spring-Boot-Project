package com.ecsg.dashboardservice.dashboard.model;

import java.util.List;

public class Feature {
    private Long id;
    private String name;
    private boolean status;
    private boolean onOff;
    private Long apiId;
    private List<Feature> subFeatures;
    private List<Property> properties;

    public Feature() {
    }

    public Feature(Long id, String name, boolean status, boolean onOff, Long apiId) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.onOff = onOff;
        this.apiId = apiId;
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

    public Long getApiId() {
        return apiId;
    }

    public void setApiId(Long apiId) {
        this.apiId = apiId;
    }

    public List<Feature> getSubFeatures() {
        return subFeatures;
    }

    public void setSubFeatures(List<Feature> subFeatures) {
        this.subFeatures = subFeatures;
    }

    public List<Property> getProperties() {
        return properties;
    }

    public void setProperties(List<Property> properties) {
        this.properties = properties;
    }
}
