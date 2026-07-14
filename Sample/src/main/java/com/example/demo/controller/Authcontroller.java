package com.example.demo.controller;

import com.example.demo.entity.Authentity;
import com.example.demo.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class Authcontroller {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody Authentity user) {
        return authService.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody Authentity loginRequest) {
        return authService.login(loginRequest.getEmail(), loginRequest.getPassword());
    }
}