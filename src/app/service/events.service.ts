import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from '../model/event-model.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventId: number = 0;

  constructor(private http: HttpClient, private router: Router) { }

  searchEvents = () => {
    this.http.get<any>("http://localhost:2000/signupUsersList")
      .subscribe(res => {
        const user = res;
        if (user) {
          alert('Login Succesful');
          //  this.loginForm.reset()
          this.router.navigate(["home"])
        } else {
          alert("user not found")
        }
      }, err => {
        alert("Something went wrong")
      })
  }

  events(organizerId: number): Observable<EventModel[]> {

    const options = organizerId ?
      { params: new HttpParams().set('organizerId', organizerId) } : {};


    return this.http.get<EventModel[]>("http://localhost:2000/events", options);
  }

  pendingEvents(): Observable<EventModel[]> {
    console.log("inside pending events methods");

    return this.http.get<EventModel[]>("http://localhost:2000/events");
  };

  approveEvent(eventId: number): boolean {
    console.log("Approve Event for " + eventId);

    // this.http.post("http://localhost:2000/approveEvents")

    return true;
  }

  eventDetails(eventId: number) {
    console.log("Event Detail based on " + this.eventId);

    //   return this.http.get<EventModel>("http://localhost:2000/events/123");
  }

  rejectEvent(eventId: number): boolean {
    console.log("Reject Event for" + eventId);

    // this.http.post("http://localhost:2000/approveEvents")

    return true;
  }


  registerEvent(data:Object) : Observable<EventModel>{
    console.log("Event reqister service is called");
    //this.http.post<EventModel>
    console.log(data);
    return of();
  }

}
