package com.best.ftree.model.mapper;

import com.best.ftree.api.controller.dto.PersonDto;
import com.best.ftree.api.controller.dto.SocialLinksDto;
import com.best.ftree.model.Person;
import com.best.ftree.model.SocialLinks;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SocialLinksMapper {

    SocialLinksDto convert(SocialLinks item);

    List<SocialLinksDto> convert(List<SocialLinks> items);
}
