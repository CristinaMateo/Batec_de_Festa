const queries ={
    createUser: `INSERT INTO users(username,email,image,password)
    VALUES
    ($1, $2, $3, $4);`,
    getUsersByEmail: `
    SELECT username, email, image, password 
    FROM users
    WHERE email=$1;`
}

module.exports = queries;