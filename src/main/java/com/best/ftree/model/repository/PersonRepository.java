package com.best.ftree.model.repository;

import com.best.ftree.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonRepository  extends JpaRepository<Person, Long> {

    Person save(Person person);

    List<Person> getAllBy();

    void deleteAllBy();
}
