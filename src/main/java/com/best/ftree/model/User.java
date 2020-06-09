package com.best.ftree.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Entity
@Table(name = "Users")
@Setter
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "bigint", nullable = false)
    private long id;

    @Column(name = "username", length = 50, unique = true)
    String username;

    @Column(name = "password", length = 50)
    String password;

    @Column(name = "role", length = 50)
    String role;

    public User() {

    }
}
