package com.best.ftree.model.repository;

import com.best.ftree.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface PersonRepository extends JpaRepository<Person, Long> {

    List<Person> getAllBy();

    List<Person> getAllByParentId(Long id);

    Person getById(Long id);

    @Transactional
    void deleteAllBy();
}
