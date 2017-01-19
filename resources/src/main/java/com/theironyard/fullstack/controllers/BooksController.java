package com.theironyard.fullstack.controllers;

import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import com.theironyard.fullstack.models.Book;
import com.theironyard.fullstack.persistence.BookDao;

@Component
@Transactional
@Path(value="/books")
@Produces(MediaType.APPLICATION_JSON)
public class BooksController {
	private BookDao bookDao;
	
	@Inject
	public BooksController(BookDao bookDao) {
		this.bookDao = bookDao;
	}
	
	@GET
	public List<Book> getAll() {
		return this.bookDao.findAll();
	}
	
	@POST
	public Book AddBook(@RequestBody Book book) {
		return this.bookDao.save(book);
	}
}
