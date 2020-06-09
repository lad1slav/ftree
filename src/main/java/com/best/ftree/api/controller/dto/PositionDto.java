package com.best.ftree.api.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class PositionDto implements Serializable {

    private long id;

    String position;
}