package com.best.ftree.api.controller.dto;

import com.best.ftree.model.Person;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class SocialLinksDto implements Serializable {

    private long id;

    String link;
}
