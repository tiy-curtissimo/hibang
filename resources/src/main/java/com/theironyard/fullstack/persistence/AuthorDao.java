package com.theironyard.fullstack.persistence;

import com.theironyard.fullstack.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorDao extends JpaRepository<Author, Long> {
}
