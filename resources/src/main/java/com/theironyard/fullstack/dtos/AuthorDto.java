package com.theironyard.fullstack.dtos;

import java.util.HashSet;
import java.util.Set;

import com.theironyard.fullstack.models.Author;
import com.theironyard.fullstack.models.Book;

public class AuthorDto {
	private Author author;
	
	public AuthorDto(Author author) {
		this.author = author;
	}
	
	public Long getId() {
		return this.author.getId();
	}
	
	public String getName() {
		return this.author.getName();
	}
	
	public Set<AuthorBookDto> getBooks() {
		Set<AuthorBookDto> list = new HashSet<AuthorBookDto>();
		for (Book book : this.author.getBooks()) {
			list.add(new AuthorBookDto(book));
		}
		return list;
	}
	

	public class AuthorBookDto {
		private Book book;
		
		public AuthorBookDto(Book book) {
			this.book = book;
		}
		
		public Long getId() {
			return this.book.getId();
		}
		
		public String getTitle() {
			return this.book.getTitle();
		}
		
		public String getImageUrl() {
			return this.book.getImageUrl();
		}
		
		public String getSmallImageUrl() {
			return this.book.getSmallImageUrl();
		}

		public Integer getNumPages() {
			return this.book.getNumPages();
		}

		public Integer getPubYear() {
			return this.book.getPubYear();
		}

		public String getIsbn() {
			return this.book.getIsbn();
		}

		public String getIsbn13() {
			return this.book.getIsbn13();
		}
	}
}
