import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { EventModel } from '../model/event-model.model';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {

  private url = "http://localhost:2000/events";
  searchFrm: any;
  

  constructor(private http: HttpClient) {
    this.searchFrm = {};
  }

  searchEventVenues(frm: Object) : Observable<EventModel[]> {
    alert("Inside searchEventVenues method called");
    const params = new HttpParams().append('param', 'value');
    
    const option = {
      headers :new HttpHeaders({ 'Content-Type': 'application/json'}),
      params:params
    };

    return this.http.get<EventModel[]>(this.url);

    // const result = this.http.get<EventModel[]>(this.url,option)
    // .subscribe(res =>{
    //   const evntModel: EventModel[] = [];

    //   res.forEach(element =>{
    //     evntModel.push(new EventModel(element.eventId, element.eventName));
    //   })

    //   return of(evntModel);
    // }, err => {
    //   console.log("Service is down");
    // });

  }
}
