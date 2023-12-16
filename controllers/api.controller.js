const api = require('../models/api.model')

const getAllEvents = async (req, res) => {
    let events;
    try {
        events = await api.getAllEvents();//esto accede a models y llama a esa funcion allí
        res.status(200).json(events); // [] con las entries encontradas
    } catch (error) {
        res.status(400).json({
            msg: "Error getting events"
        })
    }
}

const getOneEvent = async (req, res) => {
    let events;
    try {
        events = await api.getOneEvent(req.params.id);//esto accede a models y llama a esa funcion allí
        res.status(200).json(events); // [] con las entries encontradas
    } catch (error) {
        res.status(400).json({
            msg: "Error getting events"
        })
    }
}

const getMyEvents = async (req, res) => {
    let events;
    try {
        events = await api.getMyEvents(req.query.email)
        res.status(200).json(events);
    } catch (error) {
        res.status(400).json({
            msg: "Error getting events"
        })
    }
}

const createEvent = async (req, res) => {
    try {
        const newEvent = req.body; // {title,content,email,category}
        const response = await api.createEvent(newEvent);//esto accede a entries.models y llama a esa funcion allí
        res.status(201).json({
            "items_created": response,
            data: newEvent
        });
    } catch (error) {
        res.status(400).json({
            msg: "Error creating event"
        })
    }
}


const updateEvents = async (req, res) => {
    try {
        const updatedEvent = req.body; 
        const response = await api.updateEvent(updatedEvent);//esto accede a models y llama a esa funcion allí
        res.status(201).json({
            "items_created": response,
            data: updatedEvent
        });
    } catch (error) {
        res.status(400).json({
            msg: "Error creating event"
        })
    }
}

const deleteEvents = async (req, res) => {

}

module.exports = {
    getAllEvents,
    getMyEvents,
    getOneEvent,
    createEvent,
    updateEvents,
    deleteEvents
}
