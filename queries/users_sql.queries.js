const queries ={
    createUser: `INSERT INTO users(username,email,password)
    VALUES
    ($1, $2, $3);`,
    getUsersByEmail: `
    SELECT username, email, password 
    FROM users
    WHERE email=$1;`
}

module.exports = queries;