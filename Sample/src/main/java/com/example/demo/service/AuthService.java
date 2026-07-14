package com.example.demo.service;

import com.example.demo.entity.Authentity;
import com.example.demo.repository.Authrepo;
import com.example.demo.security.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private Authrepo authrepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JWTService jwtService;

    public String register(Authentity user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(user.getRole() == null ? "USER" : user.getRole());
        authrepo.save(user);
        return "User registered successfully";
    }

    public String login(String email, String password) {
        Optional<Authentity> userOpt = authrepo.findByEmail(email);

        if (userOpt.isEmpty()) {
            return "User not found";
        }

        Authentity user = userOpt.get();

        if (!passwordEncoder.matches(password, user.getPassword())) {
            return "Invalid password";
        }

        return jwtService.generateToken(user.getEmail());
    }
}