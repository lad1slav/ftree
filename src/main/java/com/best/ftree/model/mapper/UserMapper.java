package com.best.ftree.model.mapper;

import com.best.ftree.api.controller.dto.UserDto;
import com.best.ftree.model.User;
import org.mapstruct.Mapper;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto convert(User item);

    List<UserDto> convert(List<User> items);
}
