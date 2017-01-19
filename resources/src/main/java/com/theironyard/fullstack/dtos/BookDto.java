package com.theironyard.fullstack.dtos;

import com.theironyard.fullstack.models.Author;
import com.theironyard.fullstack.models.Book;

public class BookDto {
	private Book book;
	
	public BookDto(Book book) {
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
	
	public BookAuthorDto getAuthor() {
		return new BookAuthorDto(this.book.getAuthor());
	}
	
	public class BookAuthorDto {
		private Author author;
		
		public BookAuthorDto(Author author) {
			this.author = author;
		}
		
		public Long getId() {
			return this.author.getId();
		}
		
		public String getName() {
			return this.author.getName();
		}
	}
}
