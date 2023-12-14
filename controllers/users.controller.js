const usersModel = require('../models/users.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


const getUser = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    if (!email || !password) {
        res.status(400).send("Please provide an email or password to log in!")
    } else {
        let user = await usersModel.getUsersByEmail(email);//esto accede a user.models y llama a esa funcion allí

        if (user.length == 0) {
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

                //Almacenamos el token en las cookies
                res.cookie("access-token", token, {
                    httpOnly: true,
                    sameSite: "strict",
                })
                res.cookie("logged-email", req.body.email, {
                    httpOnly: true,
                    sameSite: "strict",
                })
                res.cookie("username", user[0].username, {
                    httpOnly: true,
                    sameSite: "strict",
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
    if (newUser.password === newUser.password2) {
        try {
            await usersModel.createUser(newUser);

            res.status(201).json({
                msg: "User created :)"
            })
        } catch(error){
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
    getUser,
    createUser
}