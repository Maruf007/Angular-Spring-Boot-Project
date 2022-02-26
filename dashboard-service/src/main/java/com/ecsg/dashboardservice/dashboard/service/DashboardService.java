package com.ecsg.dashboardservice.dashboard.service;

import com.ecsg.dashboardservice.dashboard.enums.RequestState;
import com.ecsg.dashboardservice.dashboard.enums.UserRole;
import com.ecsg.dashboardservice.dashboard.model.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class DashboardService {

    public List<Application> getApplicationList() {
        List<Application> applicationList = new ArrayList<>();
        Application application = new Application(2L, "Fashion BFF", "Restful", "RFashion", "Fashion BFF repo", new Date(), new Date());
        applicationList.add(application);
        application = new Application(1L, "Mobile BFF", "Restful", "Ichiba mobile app", "Mobile BFF repo", new Date(), new Date());
        applicationList.add(application);
        application = new Application(3L, "GraphQL Common BFF", "GraphQL", "Ichiba Top", "GraphQL Common BFF repo", new Date(), new Date());
        applicationList.add(application);
        return applicationList;
    }

    public Application getApplication(Long id) {
        Application application = getApplicationList().stream().filter(obj -> obj.getId() == id).findFirst().orElse(null);
        if (Objects.nonNull(application)) {
            application.setApiList(getApiListByApplicationId(id));
        }

        return application;
    }

    public List<Api> getApiListByApplicationId(Long applicationId) {
        return getApiList().stream().filter(obj -> obj.getApplicationId() == applicationId).collect(Collectors.toList());
    }

    public List<Api> getApiList() {
        List<Api> apiList = new ArrayList<>();
        Api api = new Api(1L, "itemscreen.get.v3", "Ichiba mobile app", true, true, 1L);
        apiList.add(api);
        api = new Api(2L, "itemscreen.get.v2", "Ichiba mobile app", true, true, 1L);
        apiList.add(api);
        api = new Api(3L, "itembookmark.list.v1", "Ichiba mobile app", true, true, 1L);
        apiList.add(api);
        api = new Api(4L, "itemscreen.get.v1", "Ichiba mobile app", false, false, 1L);
        apiList.add(api);

        return apiList;
    }

    public Api getApi(Long id) {
        Api api = getApiList().stream().filter(obj -> obj.getId() == id).findFirst().orElse(null);
        if (Objects.nonNull(api)) {
            api.setPropertyList(getPropertyListByApiId(id));
            api.setFeatureList(getFeatureListByApiId(id));
        }
        return api;
    }

    public List<Property> getPropertyListByApiId(Long apiId) {
        return getPropertyList().stream().filter(obj -> obj.getApiId() == apiId).collect(Collectors.toList());
    }

    public List<Property> getPropertyList() {
        List<Property> propertyList = new ArrayList<>();
        Property property = new Property(1L, "itemscreen.get.itemInfo.itemx.clientId.ichiba_iphone_long", "iOSApp_STG_000975", 1L);
        propertyList.add(property);
        property = new Property(2L, "itemscreen.get.itemInfo.itemx.clientId.ichiba_android_long", "AndroidApp_STG_000976", 1L);
        propertyList.add(property);
        property = new Property(3L, "itemscreen.get.itemInfo.itemx.clientId.ichiba_item_page", "ProductPage_STG_000161", 1L);
        propertyList.add(property);

        return propertyList;
    }

    public List<Feature> getFeatureListByApiId(Long apiId) {
        return getFeatureList().stream().filter(obj -> obj.getApiId() == apiId).collect(Collectors.toList());
    }

    public List<Feature> getFeatureList() {
        List<Feature> featureList = new ArrayList<>();
        Feature feature = new Feature(1L, "itemInfo", true, true, 1L);
        featureList.add(feature);
        feature = new Feature(2L, "shippingInfo", false, true, 1L);
        featureList.add(feature);
        feature = new Feature(3L, "consumptionTaxInfo", true, true, 1L);
        feature.setProperties(getPropertyListByFeatureId(3L));
        feature.setSubFeatures(getSubFeatureListByFeatureId(3L));
        featureList.add(feature);
        feature = new Feature(4L, "couponInfo", false, false, 1L);
        featureList.add(feature);
        feature = new Feature(5L, "shopInfo", true, true, 1L);
        featureList.add(feature);
        return featureList;
    }

    public List<Property> getPropertyListByFeatureId(Long featureId) {
        return getFeaturePropertyList().stream().filter(obj->obj.getApiId() == featureId).collect(Collectors.toList());
    }

    public List<Property> getFeaturePropertyList() {
        List<Property> propertyList = new ArrayList<>();
        Property property = new Property(1L, "bundledisplay.exclude.list.enabled", "true", 3L);
        propertyList.add(property);
        property = new Property(2L, "bundledisplay.exclude.list.cache.enabled", "true", 3L);
        propertyList.add(property);
        property = new Property(3L, "bundledisplay.exclude.list.cache.localTimeout", "600000", 3L);
        propertyList.add(property);
        property = new Property(4L, "bundledisplay.exclude.list.cache.sharedTimeout", "3600000", 3L);
        propertyList.add(property);

        return propertyList;
    }

    public List<Feature> getSubFeatureListByFeatureId(Long featureId) {
        return getSubFeatureList().stream().filter(obj->obj.getApiId() == featureId).collect(Collectors.toList());
    }

    public List<Feature> getSubFeatureList() {
        List<Feature> featureList = new ArrayList<>();
        Feature feature = new Feature(1L, "itemInfo.point", true, true, 3L);
        feature.setProperties(getPropertyListBySubFeatureId(1L));
        featureList.add(feature);
        feature = new Feature(2L, "dummySubFeature.disabled", true, false, 3L);
        featureList.add(feature);

        return featureList;
    }

    public List<Property> getPropertyListBySubFeatureId(Long subFeatureId) {
        return getSubFeaturePropertyList().stream().filter(obj->obj.getApiId() == subFeatureId).collect(Collectors.toList());
    }

    public List<Property> getSubFeaturePropertyList() {
        List<Property> propertyList = new ArrayList<>();
        Property property = new Property(1L, "itemInfo.point.ichiba_iphone_long.disabled", "false", 1L);
        propertyList.add(property);
        property = new Property(2L, "itemInfo.point.ichiba_android_long.disabled", "false", 1L);
        propertyList.add(property);
        property = new Property(3L, "itemscreen.get.v1.itemInfo.point.disabled", "false", 1L);
        propertyList.add(property);

        return propertyList;
    }

    public List<PendingRequest> getPendingRequests() {
        List<PendingRequest> pendingRequestList = new ArrayList<>();
        List<PendingRequestDetails> pendingRequestDetailsList = new ArrayList<>();
        pendingRequestDetailsList.add(new PendingRequestDetails("itemscreen.get.v3", "false", "true"));
        pendingRequestDetailsList.add(new PendingRequestDetails("itemscreen.get.itemInfo.itemx.clientId.ichiba_iphone_long", "true", "false"));
        PendingRequest pendingRequest = new PendingRequest("Mobile BFF", "itemscreen.get.v3", RequestState.IN_REVIEW.getState(), pendingRequestDetailsList);
        pendingRequestList.add(pendingRequest);

        pendingRequestDetailsList = new ArrayList<>();
        pendingRequestDetailsList.add(new PendingRequestDetails("itemscreen.get.v1", "false", "true"));
        pendingRequestDetailsList.add(new PendingRequestDetails("itemscreen.get.itemInfo.itemx.clientId.ichiba_iphone_long", "true", "false"));
        pendingRequest = new PendingRequest("Mobile BFF", "itemscreen.get.v1", RequestState.IN_PRE_PROD.getState(), pendingRequestDetailsList);
        pendingRequestList.add(pendingRequest);
        return pendingRequestList;
    }

    public List<User> getUsers() {
        List<User> userList = new ArrayList<>();
        userList.add(new User("user1", "Jadhao Mahendrea", UserRole.ADMIN.getUserRole()));
        userList.add(new User("user2", "Bhola Yugansh", UserRole.MODERATOR.getUserRole()));
        userList.add(new User("user3", "Rahman Minhajur", UserRole.MODERATOR.getUserRole()));
        userList.add(new User("user4", "Selim Mia", UserRole.QA.getUserRole()));
        return userList;
    }
}
