package com.theironyard.fullstack.persistence;

import java.util.List;

import com.theironyard.fullstack.models.Borrower;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowerDao extends JpaRepository<Borrower, Long> {
	List<Borrower> findByEmail(String email);
}
