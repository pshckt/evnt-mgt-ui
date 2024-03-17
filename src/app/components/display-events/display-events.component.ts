import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EventsService } from '../../service/events.service';
import { EventModel } from '../../model/event-model.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventDetailsComponent } from '../event-details/event-details.component';


@Component({
  selector: 'app-display-events',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule, EventDetailsComponent],
  providers:[EventsService],
  templateUrl: './display-events.component.html',
  styleUrl: './display-events.component.css'
})
export class DisplayEventsComponent {

  isEventApproved : boolean = false;
  isEventRejected : boolean = false;
  isDetailEnabled : boolean = false;
  events : EventModel[] = [];

  selectedEvent!: EventModel;
  message = '';

  constructor(private eventService : EventsService, private router: Router){}

  
  ngOnInit(): void {
    console.log("inside component load init method");
     this.eventService.pendingEvents().subscribe(data =>{

        console.log("events approval list :::::" + data);
        if(data.length>0){
          data.forEach(evet =>{
            this.events.push(evet as EventModel);
         });
        } else {
          this.message = "No Events for Approval"
        }
        
     });

     this.hideApprovalMessage();
  }

  hideApprovalMessage(){
 
    setTimeout(() => {
      console.log('hide');
      this.isEventApproved = false;
      this.isEventRejected = false;
    }, 5000);
    
  }

  detail(event: EventModel) {
    console.log("detail Events called");

    this.selectedEvent = event;
    //this.router.navigate(['details']);
  }

  approve(eventId: number) {
    console.log("Approve Events called");
    this.isEventApproved = this.eventService.approveEvent(eventId);

    if(this.isEventApproved){
      this.message = "EventId " + eventId + " successfully Approved";
    } else {
      this.message = "Service is not working. Please try again after sometime";
    }
   
    this.router.navigate(['eventsApproval'])
  }

  reject(eventId: number) {
    console.log("reject Events called");
     this.isEventRejected = this.eventService.rejectEvent(eventId);

     if(this.isEventRejected){
      this.message = "EventId " + eventId + " is rejected.";
    } else {
      this.message = "Service is not working. Please try again after sometime";
    }
  }

}
