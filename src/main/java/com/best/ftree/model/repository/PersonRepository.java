package com.best.ftree.model.repository;

import com.best.ftree.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface PersonRepository  extends JpaRepository<Person, Long> {

    Person save(Person person);

    List<Person> getAllBy();

    @Transactional
    void deleteAllBy();
}
