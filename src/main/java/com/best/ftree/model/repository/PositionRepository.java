package com.best.ftree.model.repository;

import com.best.ftree.model.Person;
import com.best.ftree.model.Position;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PositionRepository extends JpaRepository<Position, Long> {

    Position getById(Long id);

    List<Position> getAllByPerson(Person person);
}
