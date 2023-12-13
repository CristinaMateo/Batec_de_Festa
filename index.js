const express = require('express');
const app = express();
const port = 3000;
require("dotenv").config();
//const cors = require('cors')
//const helmet = require("helmet")


const passport = require("passport");
const session = require("express-session");


//habilita recepción objetos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(cors({origin:''}))
// Use Helmet!
//app.use(helmet());


//Inicializamos passport y la session de passport
app.use(session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());

//middelwares
const error404 = require('./middlewares/error404')
const morgan = require('./middlewares/morgan')


// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

//rutas
//const apiroutes = require("./routes/api.routes")
const usersRoutes = require("./routes/users.routes")

// //Rutas Template
//app.use('/api', apiroutes);
app.use('/',usersRoutes);


//para rutas no existentes
app.use('*',error404)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});

