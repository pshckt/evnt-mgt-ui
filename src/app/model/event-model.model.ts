export class EventModel {
    id: number;
    eventId: number;
    eventName: string;
    description: string;
    location: string;
    status: string;


    constructor(id: number,eventId: number, eventName: string, description: string,location: string, status: string) {
        this.id = id;
        this.eventId = eventId;
        this.eventName = eventName;
        this.description = description;
        this.location = location;
        this.status = status;
    }
    

}
