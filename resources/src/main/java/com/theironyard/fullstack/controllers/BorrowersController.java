package com.theironyard.fullstack.controllers;

import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import com.theironyard.fullstack.models.Borrower;
import com.theironyard.fullstack.persistence.BorrowerDao;

@Component
@Transactional
@Path(value="/borrowers")
@Produces(MediaType.APPLICATION_JSON)
public class BorrowersController {
	private BorrowerDao borrowerDao;

	@Inject
	public BorrowersController(BorrowerDao borrowerDao) {
		this.borrowerDao = borrowerDao;
	}

	@PUT
	@Path(value="/me")
	public Borrower Authenticate(@RequestBody Borrower borrower) {
		List<Borrower> borrowers = this.borrowerDao.findByEmail(borrower.getEmail());
		if (borrowers.size() > 0 && borrowers.get(0).getPassword().equals(borrower.getPassword())) {
			return borrowers.get(0);
		}
		return null;
	}
	
	@POST
	public Borrower AddBorrower(@RequestBody Borrower borrower) {
		return this.borrowerDao.save(borrower);
	}
}
