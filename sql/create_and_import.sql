drop table if exists checkout_items;
drop table if exists checkout;
drop table if exists book;
drop table if exists author;
drop table if exists borrower;

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

create table borrower (
  id serial not null primary key,
  last_name varchar(50) not null,
  first_name varchar(50) not null,
  email varchar(200) not null unique,
  password varchar(200) not null
);

create table checkout (
  id serial not null primary key,
  start date not null default CURRENT_DATE,
  until date not null
);

create table checkout_items (
  checkout_id int not null references checkout (id),
  book_id int not null references book (id),
  borrower_id int not null references borrower (id)
);

copy author from '/Users/curtis/dev/eclipse/hibang/sql/authors.tab' with null as '';
copy book from '/Users/curtis/dev/eclipse/hibang/sql/books.tab' with null as '';

SELECT setval('book_id_seq', (SELECT MAX(id) FROM book));
SELECT setval('author_id_seq', (SELECT MAX(id) FROM author));
