const usersModel = require('../models/users.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const regex = require('../utils/regex')


const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).send("Please provide an email or password to log in!")
    } else {

        let user = await usersModel.getUsersByEmail(email);//esto accede a user.models y llama a esa funcion allí

        if (user.length === 0) {
            res.status(400).json({ msg: 'Incorrect user or password' });
        } else {
            const hashPassword = user[0].password
            const match = await bcrypt.compare(password, hashPassword);
            if (match) {
                const userForToken = {
                    email: email,
                    username: user[0].username,
                };
                const token = jwt.sign(userForToken, process.env.CLIENT_SECRET, { expiresIn: '60m' });

                res.status(200).json({
                    accesToken: token,
                    loggedEmail:req.body.email,
                    username:user[0].username
                })
            } else {
                res.status(400).json({ msg: 'Incorrect user or password' });
            }
        }
        // res.status(200).json(user); // [] con los users encontradas
    }

}

// Create User
const createUser = async (req, res) => {
    const newUser = req.body;
    if (newUser.password === newUser.pass2) {
        try {
            if (regex.validateEmail(newUser.email) && regex.validatePassword(newUser.password)) {
                await usersModel.createUser(newUser);
                res.status(201).json({
                    msg: "User created :)"
                })
            } else {
                res.status(400).json({
                    msg: "Invalid email or password"
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg: "email already in use"
            })
        }
    } else {
        res.status(400).json({
            msg: "The passwords do not match"
        })
    }
}

module.exports = {
    login,
    createUser
}