const express = require('express');
const apiController = require("../controllers/api.controller");
const apiRouter = express.Router();

apiRouter.get()//todos los eventos de la bbdd
apiRouter.get()//eventos propios
apiRouter.post()//crear evento
apiRouter.put()//modificar evento
apiRouter.delete()//eliminar evento

module.exports = apiRouter;