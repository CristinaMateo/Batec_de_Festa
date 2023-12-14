const jwt = require("jsonwebtoken");
const passport = require('passport');
const usersModel = require('../models/users.model');
require('../config/oauth')


const authentication = passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" })

//Fallo
const redirectToFailure = passport.authenticate('google', { failureRedirect: '/auth/failure' })



//Éxito
const Success = async (req, res) => {
    console.log("holi",req)
    

        //Estos son los pasos para crear un token si la autenticación es exitosa
        const payload = {
            //save here data
            check: true
        };
        const token = jwt.sign(payload, `secret_key`, {
            expiresIn: "60m"
        });

        //Almacenamos el token en las cookies
        res.cookie("access-token", token, {
            httpOnly: true,
            sameSite: "strict",
        })
        res.cookie("logged-email", req.user.emails[0].value, {
            httpOnly: true,
            sameSite: "strict",
        })
        
    }


const failure = (req, res) => {
    res.send('Something went wrong... Try again')
    res.redirect('/login')
}


const logout = async (req, res) => {
    req.logout(async function (err) {
        if (err) { return next(err); }
        await usersModel.logoutUser()
        req.session.destroy();
        res.clearCookie("logged-email");
        res.clearCookie("access-token").redirect('/');
    });

}

module.exports = {
    authentication,
    redirectToFailure,
    Success,
    failure,
    logout
}