package com.ecsg.dashboardservice.dashboard.model;

import java.util.Date;
import java.util.List;

public class Application {
    Long id;
    String name;
    String type;
    String client;
    String repoUrl;
    Date createDate;
    Date updateDate;
    List<Api> apiList;

    public Application() {
    }

    public Application(Long id, String name, String type, String client, String repoUrl, Date createDate, Date updateDate) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.client = client;
        this.repoUrl = repoUrl;
        this.createDate = createDate;
        this.updateDate = updateDate;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public String getRepoUrl() {
        return repoUrl;
    }

    public void setRepoUrl(String repoUrl) {
        this.repoUrl = repoUrl;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public List<Api> getApiList() {
        return apiList;
    }

    public void setApiList(List<Api> apiList) {
        this.apiList = apiList;
    }
}
