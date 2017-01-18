package com.theironyard.fullstack.controllers;

import java.util.List;

import javax.inject.Inject;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.theironyard.fullstack.models.Book;
import com.theironyard.fullstack.persistence.BookDao;

@RestController
@RequestMapping(value="/books", consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
public class BooksController {
	private BookDao bookDao;
	
	@Inject
	public BooksController(BookDao bookDao) {
		this.bookDao = bookDao;
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Book> getAll() {
		return this.bookDao.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Book AddBook() {
		return new Book("Book added");
	}
}
