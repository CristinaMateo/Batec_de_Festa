const express = require('express');
const app = express();
const port = 3000;
require("dotenv").config();
const path = require('path');
const cors = require('cors')
//const helmet = require("helmet")
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');

const passport = require("passport");
const session = require("express-session");


//habilita recepción objetos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin:'http://localhost:5173'}))
// Use Helmet!
//app.use(helmet());

//uso de swagger
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Inicializamos passport y la session de passport
 app.use(session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session()); 

//middelwares
const error404 = require('./middlewares/error404')
const morgan = require('./middlewares/morgan')


// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms'));

//rutas
const apiroutes = require("./routes/api.routes")
const usersRoutes = require("./routes/users.routes")
//const authRoutes = require("./routes/oAuth.routes.js")

// //Rutas Template
app.use('/api', apiroutes);
app.use('/',usersRoutes);
//app.use('/', authRoutes)


//* Serve static assets in production, must be at this location of this file
if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/dist'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'dist','index.html')));
  }

//para rutas no existentes
app.use('*',error404)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});

