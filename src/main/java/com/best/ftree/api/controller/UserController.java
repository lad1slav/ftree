package com.best.ftree.api.controller;

import com.best.ftree.api.controller.dto.CreateUserDto;
import com.best.ftree.api.controller.dto.PersonDto;
import com.best.ftree.api.controller.dto.UserDto;
import com.best.ftree.api.controller.exception.AlreadyExistException;
import com.best.ftree.api.controller.exception.NotFoundException;
import com.best.ftree.model.User;
import com.best.ftree.model.mapper.UserMapper;
import com.best.ftree.model.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
@Slf4j
@AllArgsConstructor
@Validated
public class UserController {
    @Autowired
    UserRepository repository;

    @Autowired
    UserMapper mapper;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<UserDto> getAllPersons() {
        return mapper.convert(repository.getAllBy());
    }

    @GetMapping("username")
    @ResponseStatus(HttpStatus.OK)
    public UserDto getByUsernameAndPassword(String username, String password) {
        if (repository.getByUsernameAndPassword(username, password) == null)
        {
            throw new NotFoundException("User with username: " + username + " doesn't exist");
        }

        return mapper.convert(repository.getByUsernameAndPassword(username, password));
    }

    @Transactional
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public UserDto createUser(CreateUserDto user) {
        User newUser = new User();

        newUser.setPassword(user.getPassword());
        newUser.setUsername(user.getUsername());
        newUser.setRole(user.getRole());

        try {
            repository.save(newUser);
        } catch (RuntimeException e)
        {
            throw new AlreadyExistException("Username " + user.getUsername() + " already exists");
        }

        return mapper.convert(newUser);
    }
}
