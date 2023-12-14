const express = require('express');
const apiController = require("../controllers/api.controller");
const apiRouter = express.Router();

apiRouter.get("/events", apiController.getAllEvents)//todos los eventos de la bbdd
apiRouter.get("/myevents", apiController.getMyEvents)//eventos propios
apiRouter.post("/events", apiController.createEvent)//crear evento
apiRouter.put("/events/:title/:email", apiController.updateEvents)//modificar evento
//apiRouter.delete("/deletevent/:id", apiController,deleteEvent)//eliminar evento

module.exports = apiRouter;