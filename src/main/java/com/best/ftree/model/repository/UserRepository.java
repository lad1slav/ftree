package com.best.ftree.model.repository;

import com.best.ftree.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> getAllBy();
    User getById(Long id);
    User getByUsername(String username);
}
