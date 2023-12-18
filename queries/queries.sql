--Crear tabla usuarios
CREATE TABLE users (
  user_id serial NOT NULL PRIMARY KEY, 
  username text NOT NULL, 
  email text NOT NULL UNIQUE, 
  image text NOT NULL,
  password text NOT NULL
);


--Crear tabla eventos
CREATE TABLE events (
  event_id serial NOT NULL PRIMARY KEY, 
  user_id int,
	FOREIGN KEY (user_id) REFERENCES users (user_id),
  title varchar(45) NOT NULL,
  image text NOT NULL,
  city varchar(45) NOT NULL,
  address text NOT NULL,
  description text NOT NULL,
  event_time time NOT NULL,
  event_date date NOT NULL
);

--obtener todos los eventos (GET)
SELECT title, city, image, event_time, event_date, event_id,address,description
    FROM events;

--obtener eventos propios (GET)
SELECT title, city, e.image, event_time, event_date, event_id,address,description
    FROM events AS e
    INNER JOIN users AS u
    ON e.user_id=u.user_id
    WHERE u.email = $1;

--Obtener un solo evento(GET)
SELECT title, city, e.image, event_time, event_date, event_id, address, description, u.email
    FROM events AS e
    INNER JOIN users AS u
    ON e.user_id=u.user_id
    WHERE event_id=$1;


--Crear nuevo evento (POST)
INSERT INTO events(title, image, city, address, description, event_time, event_date, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7,
    (SELECT user_id FROM users WHERE email=$8));

--Format example
/* INSERT INTO events(title, city, address, description, event_time, event_date, user_id)
VALUES ('First Event', 'Barcelona', 'Parque', 'Fiestuki navideña en el parque, todo el mundo invitado.', '20:00', '2023-12-13',
  (SELECT user_id FROM users WHERE email='hola@email.com')); */

--Modificar datos del evento propio (PUT)
UPDATE events AS e
    SET title = $1,
        image = $2,
        city =$3,
        address = $4,
        description = $5,
        event_time = $6,
        event_date = $7
    FROM users AS u
    WHERE e.user_id = u.user_id
        AND e.title = $8 -- Título actual
        AND u.email = $9; --mail del usuario


--Eliminar evento propio por título(DELETE)
DELETE FROM events AS e
    USING users AS u
    WHERE e.user_id = u.user_id
        AND e.event_id = $1
        AND u.email = $2;


  --Crear nuevo usuario (POST)
  INSERT INTO users(username,email,image,password)
    VALUES
    ($1, $2, $3, $4);


--get info de usuario por email para proceso de login
   SELECT username, email, image, password 
    FROM users
    WHERE email=$1;