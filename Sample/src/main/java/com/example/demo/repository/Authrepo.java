package com.example.demo.repository;

import com.example.demo.entity.Authentity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Authrepo extends JpaRepository<Authentity, Long> {
    Optional<Authentity> findByEmail(String email);
}