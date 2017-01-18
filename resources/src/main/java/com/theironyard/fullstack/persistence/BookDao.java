package com.theironyard.fullstack.persistence;

import com.theironyard.fullstack.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookDao extends JpaRepository<Book, Long> {
}
