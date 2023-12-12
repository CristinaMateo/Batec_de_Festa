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
  address text NOT NULL,
  description text NOT NULL,
  event_time time NOT NULL,
  event_date date NOT NULL
);

--obtener todos los eventos (GET)
SELECT title, city, address, description, event_time, event_date
FROM events;

--obtener eventos propios (GET)
SELECT title, city, address, description, event_time, event_date
FROM events AS e
INNER JOIN users AS u
ON e.user_id=u.user_id
WHERE u.email = $1;


--Crear nuevo evento (POST)
INSERT INTO events(title, city, address, description, event_time, event_date, user_id)
  VALUES ($1, $2, $3, $4, $5, $6,
  SELECT user_id FROM users WHERE email=$7));

--Format example
/* INSERT INTO events(title, city, address, description, event_time, event_date, user_id)
VALUES ('First Event', 'Barcelona', 'Parque', 'Fiestuki navideña en el parque, todo el mundo invitado.', '20:00', '2023-12-13',
  (SELECT user_id FROM users WHERE email='hola@email.com')); */


  --Crear nuevo usuario (POST)
  INSERT INTO users(username, email, image, password)
VALUES ($1, $2,$3, $4);

--Eliminar evento propio por título(DELETE)
DELETE FROM events AS e
USING users AS u
WHERE e.user_id = u.user_id
    AND e.title = $1
    AND u.email = $2;


--Modificar datos del evento propio (PUT)
UPDATE events AS e
SET title = $1,
	city = $2,
    address = $3,
    description = $4,
    event_time = $5,
    event_date = $6
FROM users AS u
WHERE e.user_id = u.user_id
    AND e.title = $7 --Título original
    AND u.email = $8 --mail del usuario


    -- updatear tabla users para que tenga la columna 'logged' con valor 'false' por defecto
ALTER TABLE users
ADD logged boolean NOT NULL
CONSTRAINT makeDefault
DEFAULT false;

-- modificar el estado de user 'logged' a true cuando hace log in
UPDATE users
    SET logged = true
    WHERE email = $1
    RETURNING *

  -- modificar el estado de user 'logged' a false cuando hace log out
UPDATE users
    SET logged = false
    RETURNING *

--get info de usuario por email para proceso de login
    SELECT username, email, image, password 
    FROM users
    WHERE email=$1;