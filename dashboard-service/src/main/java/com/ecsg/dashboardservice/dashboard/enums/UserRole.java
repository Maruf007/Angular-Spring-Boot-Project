package com.ecsg.dashboardservice.dashboard.enums;

public enum UserRole {
    ADMIN("Admin"),
    MODERATOR("Moderator"),
    QA("QA");

    private String userRole;
    private UserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getUserRole() {
        return this.userRole;
    }
}
