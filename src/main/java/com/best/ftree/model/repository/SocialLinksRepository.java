package com.best.ftree.model.repository;

import com.best.ftree.model.Person;
import com.best.ftree.model.SocialLinks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SocialLinksRepository extends JpaRepository<SocialLinks, Long> {

    SocialLinks getById(Long id);

    List<SocialLinks> getAllByPerson(Person person);
}
