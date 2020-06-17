package com.best.ftree.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Entity
@Table(name = "SocialLinks")
@Setter
public class SocialLinks implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "bigint", nullable = false)
    private long id;

    @ManyToOne
    @JoinColumn(name = "person_id", nullable = false)
    Person person;

    @Column(name = "link", length = 250)
    String link;
}
