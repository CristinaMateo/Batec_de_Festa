class Event{
    constructor(title, city, location, description, event_time, event_date, image){
    this.title = title;
    this.image = image;
    this.city = city;
    this.location = location;
    this.description = description;
    this.event_time = event_time;
    this.event_date = event_date
  }
}


export default Event;