package com.best.ftree.model.mapper;

import com.best.ftree.api.controller.dto.PersonDto;
import com.best.ftree.model.Person;
import com.best.ftree.model.repository.SocialLinksRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PersonMapper {

    @Mapping(source = "parentId", target = "parentId")
    @Mapping(source = "positions", target = "positions")
    PersonDto convert(Person item);

    List<PersonDto> convert(List<Person> items);
}

