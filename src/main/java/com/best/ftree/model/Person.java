package com.best.ftree.model;

import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Entity
@Table(name = "Person")
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", columnDefinition = "bigint", nullable = false)
    private long id;

    @Column(name = "Person", length = 50)
    String status;

    public Person() {

    }
}