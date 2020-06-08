package com.best.ftree.api.controller;

import com.best.ftree.model.Person;
import com.best.ftree.model.repository.PersonRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/projects")
@Slf4j
@AllArgsConstructor
@Validated
public class Controller {

    @Autowired
    private PersonRepository repository;

    @GetMapping("s")
    @ResponseStatus(HttpStatus.OK)
    public List<Person> find() {
        repository.deleteAllBy();

        return repository.getAllBy();
    }
}