const express = require('express');
const apiController = require("../controllers/api.controller");
const apiRouter = express.Router();

apiRouter.get("/events", apiController.getAllEvents)//todos los eventos de la bbdd
apiRouter.get("/events/:id", apiController.getOneEvent)//un evento, detalles
apiRouter.get("/myevents", apiController.getMyEvents)//eventos propios
apiRouter.post("/myevents/:email", apiController.createEvent)//crear evento
apiRouter.put("/myevents/:title/:email", apiController.updateEvents)//modificar evento
//apiRouter.delete("/myevents/:id", apiController,deleteEvent)//eliminar evento

module.exports = apiRouter;