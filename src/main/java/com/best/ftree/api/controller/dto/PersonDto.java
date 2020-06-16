package com.best.ftree.api.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class PersonDto implements Serializable {
    private long id;

    private String firstName;

    private String secondName;

    private LocalDate birthDate;

    private LocalDate inviteDate;

    private String email;

    private String phoneNumber;

    private String status;

    private List<SocialLinksDto> socialLinks;

    private List<PositionDto> positions;

    private byte[] img;

    private Long parentId;
}
