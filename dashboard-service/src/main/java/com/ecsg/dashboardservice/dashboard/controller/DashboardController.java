package com.ecsg.dashboardservice.dashboard.controller;

import com.ecsg.dashboardservice.dashboard.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/dashboard", produces = MediaType.APPLICATION_JSON_VALUE)
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/applications")
    public ResponseEntity getApplicationList() {
        return new ResponseEntity(dashboardService.getApplicationList(), HttpStatus.OK);
    }

    @GetMapping("/applications/{id}")
    public ResponseEntity getApplication(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(dashboardService.getApplication(id), HttpStatus.OK);
    }

    @GetMapping("/apis/{id}")
    public ResponseEntity getApi(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(dashboardService.getApi(id), HttpStatus.OK);
    }

    @GetMapping("/pending-request")
    public ResponseEntity getPendingRequests() {
        return new ResponseEntity(dashboardService.getPendingRequests(), HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity getUsers() {
        return new ResponseEntity(dashboardService.getUsers(), HttpStatus.OK);
    }
}
