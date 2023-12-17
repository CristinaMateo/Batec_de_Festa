const queries = require('../queries/users_sql.queries')
const pool = require('../config/db_pgsql')
const regex = require('../utils/regex');
const bcrypt = require('bcrypt');
const saltRounds = 10;




const createUser = async (infouser) => {
    const { email, username, password, image } = infouser;
    const hashPassword = await bcrypt.hash(password, saltRounds)
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createUser, [username, email, image, hashPassword])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const getUsersByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion a bbdd
        const data = await client.query(queries.getUsersByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const users = {
    getUsersByEmail,
    createUser
}

module.exports = users;