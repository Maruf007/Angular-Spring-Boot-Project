package com.ecsg.dashboardservice.dashboard.model;

public class Property {
    private Long id;
    private String name;
    private String value;
    private Long apiId;

    public Property() {
    }

    public Property(Long id, String name, String value, Long apiId) {
        this.id = id;
        this.name = name;
        this.value = value;
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

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Long getApiId() {
        return apiId;
    }

    public void setApiId(Long apiId) {
        this.apiId = apiId;
    }
}
