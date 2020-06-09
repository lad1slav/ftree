package com.best.ftree.api.controller;

import com.best.ftree.api.controller.dto.CreatePersonDto;
import com.best.ftree.api.controller.dto.PersonDto;
import com.best.ftree.api.controller.dto.PositionDto;
import com.best.ftree.api.controller.exception.NotFoundException;
import com.best.ftree.model.Person;
import com.best.ftree.model.Position;
import com.best.ftree.model.SocialLinks;
import com.best.ftree.model.mapper.PersonMapper;
import com.best.ftree.model.mapper.SocialLinksMapper;
import com.best.ftree.model.repository.PersonRepository;
import com.best.ftree.model.repository.PositionRepository;
import com.best.ftree.model.repository.SocialLinksRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/person")
@Slf4j
@AllArgsConstructor
@Validated
public class Controller {

    @Autowired
    private PersonRepository repository;

    @Autowired
    private SocialLinksRepository screpository;

    @Autowired
    private PositionRepository prepository;

    @Autowired
    private PersonMapper mapper;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PersonDto> getAllPersons() {
        return mapper.convert(repository.getAllBy());
    }

    @GetMapping("id")
    @ResponseStatus(HttpStatus.OK)
    public PersonDto getById(Long id) {
        return mapper.convert(repository.getById(id));
    }

    @GetMapping("child")
    @ResponseStatus(HttpStatus.OK)
    public List<Long> getChildByPerson(Long id) {
        List<Long> childId = new ArrayList<>();
        repository.getAllByParentId(id).forEach(child -> {
            childId.add(child.getId());
        });

        return childId;
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public long deleteById(Long id) {
        repository.deleteById(id);

        return id;
    }

    @DeleteMapping("all")
    @ResponseStatus(HttpStatus.OK)
    public String deleteAll() {
        repository.deleteAllBy();

        return "ok";
    }

    @Transactional
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public PersonDto createPerson(CreatePersonDto person) {
        Person newPerson = new Person();

        newPerson.setFirstName(person.getFirstName());
        newPerson.setSecondName(person.getSecondName());
        newPerson.setBirthDate(person.getBirthDate());
        newPerson.setEmail(person.getEmail());
        newPerson.setInviteDate(person.getInviteDate());
        newPerson.setPhoneNumber(person.getPhoneNumber());
        repository.save(newPerson);

        List<SocialLinks> socialLinks = new ArrayList<>();
        if(person.getSocialLinks() != null) person.getSocialLinks().forEach(link -> {
            SocialLinks socialLink = new SocialLinks();
            socialLink.setPerson(newPerson);
            socialLink.setLink(link);

            socialLinks.add(screpository.save(socialLink));
        });

        newPerson.setSocialLinks(socialLinks);

        List<Position> positions = new ArrayList<>();
        if(person.getPositions() != null) person.getPositions().forEach(pos -> {
            Position position = new Position();
            position.setPerson(newPerson);
            position.setPosition(pos);

            positions.add(prepository.save(position));
        });

        newPerson.setPositions(positions);

        if(repository.getById(person.getParentId()) == null)
        {
            throw new NotFoundException("Person with id " + person.getParentId() + " doesn't exist");
        }

        newPerson.setParentId(repository.getById(person.getParentId()).getId());

        repository.save(newPerson);

        System.out.println(person.getPositions());

        return mapper.convert(newPerson);
    }
}