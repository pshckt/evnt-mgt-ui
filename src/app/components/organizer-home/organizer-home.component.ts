import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventsService } from '../../service/events.service';
import { EventModel } from '../../model/event-model.model';
import { EventComponent } from '../event/event.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-organizer-home',
  standalone: true,
  imports: [CommonModule,EventComponent,RouterOutlet,RouterLinkActive,RouterLink],
  providers:[EventsService],
  templateUrl: './organizer-home.component.html',
  styleUrl: './organizer-home.component.css'
})
export class OrganizerHomeComponent {

  events : EventModel[] = [];
  private organizerId : number = 0;

  eventId!: number;
  message = '';

  constructor(private eventService : EventsService){}

  ngOnInit(): void {
    //// Please set the sessionstorage of useid after login so that it fetch the value from there and then 
    this.organizerId = Number(!sessionStorage.getItem("organizerId"))? this.organizerId : 0;
    console.log("User Organizaer id :" + this.organizerId);
    this.eventService.events(this.organizerId).subscribe(data =>{
      if(data.length>0){
        data.forEach(evet =>{
          this.events.push(evet as EventModel);
       });
      } else {
        this.message = "No Events registered";
      }
    });

   // this.eventId = 
  }

  setEventId(eventID : number){
    console.log('Setting ID called :' + eventID);
    this.eventId = eventID;
  }

}
