const queries = {
    getEvents: `SELECT title, city, image, event_time, event_date, event_id,address,description
    FROM events;`,
    getMyEvents: `SELECT title, city, e.image, event_time, event_date, event_id,address,description
    FROM events AS e
    INNER JOIN users AS u
    ON e.user_id=u.user_id
    WHERE u.email = $1;`,
    getOneEvent: `SELECT title, city, e.image, event_time, event_date, event_id, address, description, u.email
    FROM events AS e
    INNER JOIN users AS u
    ON e.user_id=u.user_id
    WHERE event_id=$1;`,
    createEvent: `INSERT INTO events(title, image, city, address, description, event_time, event_date, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7,
    (SELECT user_id FROM users WHERE email=$8));`,
    updateEvent: `UPDATE events AS e
    SET title = $1,
        image = $2,
        city =$3,
        address = $4,
        description = $5,
        event_time = $6,
        event_date = $7
    FROM users AS u
    WHERE e.user_id = u.user_id
        AND e.title = $8
        AND u.email = $9;`,
    deleteThisEvent: `DELETE FROM events AS e
    USING users AS u
    WHERE e.user_id = u.user_id
        AND e.event_id = $1
        AND u.email = $2;`
}

module.exports = queries