const queries = {
    getEvents:`SELECT title, city, image, event_time, event_date, event_id,address,description
    FROM events;`,
    getMyEvents:`SELECT title, e.image, city, address, description, event_time, event_date
    FROM events AS e
    INNER JOIN users AS u
    ON e.user_id=u.user_id
    WHERE u.email = $1;`,
    getOneEvent:`SELECT title, city, image, event_time, event_date, event_id, address, description
    FROM events
    WHERE event_id=$1;`,
    createEvent:`INSERT INTO events(title, image, city, address, description, event_time, event_date, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7,
    (SELECT user_id FROM users WHERE email=$8));`,
    updateEvent:`UPDATE events AS e
    SET title = $1,
        city = $2,
        address = $3,
        description = $4,
        event_time = $5,
        event_date = $6
    FROM users AS u
    WHERE e.user_id = u.user_id
        AND e.title = $7
        AND u.email = $8`,
    deleteEvent:`DELETE FROM events AS e
    USING users AS u
    WHERE e.user_id = u.user_id
        AND e.title = $1
        AND u.email = $2;`
}

module.exports = queries