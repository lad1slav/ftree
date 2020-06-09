//package com.best.ftree.model.mapper;
//
//import com.best.ftree.api.controller.dto.PersonDto;
//import com.best.ftree.model.Person;
//import com.best.ftree.model.repository.SocialLinksRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.ArrayList;
//import java.util.List;
//
//public class TPersonMapper {
//    @Autowired
//    SocialLinksRepository repository;
//
//    PersonDto convert(Person item) {
//        PersonDto person = new PersonDto();
//        person.setFirstName(item.getFirstName());
//        person.setSecondName(item.getSecondName());
//        person.setBirthDate(item.getBirthDate());
//        person.setEmail(item.getEmail());
//        person.setId(item.getId());
//        person.setInviteDate(item.getInviteDate());
//        person.setPhoneNumber(item.getPhoneNumber());
//
//        List<String> links = new ArrayList<>();
//        repository.getAllByPerson(item).forEach(link -> {
//            links.add(link.getLink());
//        });
//
//        person.setSocialLinks(links);
//
//        return person;
//    }
//
//    List<PersonDto> convert(List<Person> items) {
//        List<PersonDto> list = new ArrayList<>();
//        items.forEach(item -> {
//            list.add(this.convert(item));
//        });
//
//        return list;
//    }
//}
