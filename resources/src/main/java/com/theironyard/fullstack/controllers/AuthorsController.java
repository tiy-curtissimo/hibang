package com.theironyard.fullstack.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import com.theironyard.fullstack.dtos.AuthorDto;
import com.theironyard.fullstack.models.Author;
import com.theironyard.fullstack.persistence.AuthorDao;

@Component
@Transactional
@Path(value="/authors")
@Produces(MediaType.APPLICATION_JSON)
public class AuthorsController {
	private AuthorDao authorDao;
	
	@Inject
	public AuthorsController(AuthorDao authorDao) {
		this.authorDao = authorDao;
	}
	
	@GET
	public List<AuthorDto> getAll() {
		List<AuthorDto> authors = new ArrayList<AuthorDto>();
		for (Author author : this.authorDao.findAll()) {
			authors.add(new AuthorDto(author));
		}
		return authors;
	}
	
	@GET
	@Path(value="/{id}")
	public AuthorDto getAll(@PathParam("id") Long id) {
		return new AuthorDto(this.authorDao.findOne(id));
	}
	
	@POST
	public Author AddBook(@RequestBody Author book) {
		return this.authorDao.save(book);
	}
}
