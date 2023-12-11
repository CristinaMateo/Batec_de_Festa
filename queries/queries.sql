--Crear tabla usuarios
CREATE TABLE users (
  user_id serial NOT NULL PRIMARY KEY, 
  username varchar(45) NOT NULL, 
  email varchar(45) NOT NULL UNIQUE, 
  image varchar(45) NOT NULL,
  password varchar(45) NOT NULL
);


--Crear tabla eventos
CREATE TABLE events (
  event_id serial NOT NULL PRIMARY KEY, 
  user_id int,
	FOREIGN KEY (user_id) REFERENCES users (user_id),
  title varchar(45) NOT NULL,
  city varchar(45) NOT NULL,
  location varchar(45) NOT NULL,
  description varchar(200) NOT NULL,
  event_time time (10) NOT NULL,
  event_date varchar (10) NOT NULL
);