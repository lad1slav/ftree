package com.best.ftree.api.controller.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
public class UserDto implements Serializable {
    private long id;
    private String username;
    private String role;
}
