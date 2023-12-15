const queries = require('../queries/events_sql.queries');
const pool = require('../config/db_pgsql');


//GET
const getAllEvents= async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEvents)
        result = data.rows       
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const getOneEvent= async (id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getOneEvent, [id])
        result = data.rows       
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


//GET
const getMyEvents = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion a bbdd
        const data = await client.query(queries.getMyEvents, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//// CREATE
const createEvent = async (eventinfo) => {
    const { title, city, address, description, event_time, event_date, email} = eventinfo;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEvent,[title, city, address, description, event_time, event_date, email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


//UPDATE
const updateEvent = async (eventinfo) => {
    const { title, city, address, description, event_time, event_date, oldiTtle, email} = eventinfo;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEvent,[title, city, address, description, event_time, event_date, oldTitle, email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//DELETE
const deleteEvent = async (eventinfo) => {
    const { title, email} = eventinfo;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEvent,[title, email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


const events = {
    getAllEvents,
    getMyEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent
}

module.exports = events;