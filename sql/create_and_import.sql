drop table if exists book;
drop table if exists author;

create table author (
  id serial not null primary key,
  name varchar(200) not null
);

create table book (
  id serial not null primary key,
  isbn char(10),
  isbn13 char(13),
  title varchar(200),
  image_url varchar(200),
  small_image_url varchar(200),
  num_pages int,
  pub_year int,
  author_id int references author (id)
);

copy author from '«pwd»/authors.tab' with null as '';
copy book from '«pwd»/books.tab' with null as '';

SELECT setval('book_id_seq', (SELECT MAX(id) FROM book));
SELECT setval('author_id_seq', (SELECT MAX(id) FROM author));