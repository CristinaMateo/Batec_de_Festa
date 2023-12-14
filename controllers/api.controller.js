const api = require ('../models/api.model')

const getAllEvents = async (req, res) => {
    let events;
    
        events = await api.getAllEvents();//esto accede a entries.models y llama a esa funcion allí
    
    res.status(200).json(events); // [] con las entries encontradas
}

const getMyEvents = async (req, res) => {
    let events;
    events = await api.getMyEvents(req.query.email)
    res.status(200).json(events); 
}

const createEvent = async (req, res) => {
    const newEvent = req.body; // {title,content,email,category}
    const response = await api.createEvent(newEvent);//esto accede a entries.models y llama a esa funcion allí
    res.status(201).json({
        "items_created": response,
        data: newEvent
    });
}


const updateEvents = async (req, res) => {

}

const deleteEvents = async (req, res) => {
    
}

module.exports ={
    getAllEvents,
    getMyEvents,
    createEvent,
    updateEvents,
    deleteEvents
}
