import { CommonModule, NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormGroup,NgControl, ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import { EventsService } from '../../service/events.service';
import { EventModel } from '../../model/event-model.model';


interface Event{
  eventName: string,
  description: string,
  date: string,
  time: string,
  location: string
}


@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, NgClass,ReactiveFormsModule],
  providers:[EventsService],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {

  @Input() eventId: number = 0;
  name: string = '';

  event: EventModel = {} as EventModel ;

  enableEventForm: boolean = false;

  public eventFrm!: FormGroup;

  countries : string[] = ['India','Philippines','US','UK','Italy','Ireland','UAE','Singapore','Japan','China','Canada'];
  

  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder,private router: Router,private eventService:EventsService) {
   
  }

  ngOnInit(): void {

    console.log(this.eventId + "Event load inside event component");
    this.countries.sort();
    this.eventFrm = this.formBuilder.group({
      eventName: ['',[Validators.required]],
      eventDescription: ['',[Validators.required]],
      country: ['',[Validators.required]],
      location: [''],
      eventStart:['', [Validators.required]],
      eventEnd:['',[Validators.required]]
    })
   
    this.eventService.eventDetails(1324);

    if(!(this.eventId > 0)){
      this.enableEventForm = true;
    }

    this.event = new EventModel(123,432,"Event"+this.eventId, "Event descption of"+this.eventId,"Bangalore","");



 
  }

 
  

  register() {
    this.isSubmitted = true;
    if (this.eventFrm.invalid) {
      return;
    }
    alert("inside submit call");
    console.info("Form Valid!");

    console.log(this.eventFrm.value.eventName);
    console.log(this.eventFrm.value.eventDescription);
    console.log(this.eventFrm.value.location);
    console.log(this.eventFrm.value.eventStart);
    console.log(this.eventFrm.value.eventEnd);
    -
    this.eventService.registerEvent(this.eventFrm);
    this.router.navigate(['organizerHome']);
  }

  get controls() {
    return this.eventFrm.controls;
  }


}
