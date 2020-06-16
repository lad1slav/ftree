package com.best.ftree.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Getter
@Entity
@Table(name = "Person")
@Setter
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "bigint", nullable = false)
    private long id;

    @Column(name = "first_name", length = 50)
    String firstName;

    @Column(name = "second_name", length = 50)
    String secondName;

    @Column(name = "birth_date", columnDefinition = "date")
    LocalDate birthDate;

    @Column(name = "phone_number", length = 50)
    String phoneNumber;

    @Column(name = "email", length = 50)
    String email;

    @Column(name = "status", length = 50)
    String status;

    @Column(name = "invite_date", columnDefinition = "date")
    LocalDate inviteDate;

    @OneToMany(mappedBy = "person", cascade = CascadeType.REMOVE)
    List<SocialLinks> socialLinks;

    @OneToMany(mappedBy = "person", cascade = CascadeType.REMOVE)
    List<Position> positions;

    @Column(name = "parent_id", columnDefinition = "bigint")
    Long parentId;

    @Column(name = "img", length = 1000)
    private byte[] img;

    public Person() {

    }
}