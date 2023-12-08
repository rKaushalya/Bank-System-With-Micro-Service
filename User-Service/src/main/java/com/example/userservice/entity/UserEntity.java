package com.example.userservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserEntity {
    @Id
    private String userId;
    private String userName;
    private String email;
    private String password;
}
