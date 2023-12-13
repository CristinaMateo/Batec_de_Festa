const express = require('express');
const apiController = require("../controllers/api.controller");
const apiRouter = express.Router();

apiRouter.get("/events", apiController.getAllEvents)//todos los eventos de la bbdd
apiRouter.get("/myevents", apiController.getMyEvents)//eventos propios
apiRouter.post("/createvent", apiController.createEvent)//crear evento
apiRouter.put("/updateevent/:id")//modificar evento
apiRouter.delete("/deletevent/:id")//eliminar evento

module.exports = apiRouter;