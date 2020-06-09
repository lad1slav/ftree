package com.best.ftree.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Entity
@Table(name = "Position")
@Setter
public class Position implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "bigint", nullable = false)
    private long id;

    @ManyToOne
    @JoinColumn(name = "person_id", nullable = false)
    Person person;

    @Column(name = "position", length = 250)
    String position;
}
