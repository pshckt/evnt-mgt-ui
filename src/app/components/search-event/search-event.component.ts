import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VenuesService } from '../../service/venues.service';
import { EventModel } from '../../model/event-model.model';

@Component({
  selector: 'app-search-event',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  providers:[VenuesService],
  templateUrl: './search-event.component.html',
  styleUrl: './search-event.component.css'
})
export class SearchEventComponent {
  isSubmitted = false;
  public searchForm!: FormGroup;
  frm = {};
  events : EventModel[] = [];
  countries : string[] = ['India','Philippines','US','UK','Italy','Ireland','UAE','Singapore','Japan','China','Canada'];
  constructor(private formBuilder: FormBuilder, private router: Router, private venueService: VenuesService){
    
  };

  ngOnInit(): void {

    this.countries.sort();
    this.searchForm = this.formBuilder.group({
      country: ['',[Validators.required]],
      location: [''],
      eventDate:['']
    })
  }

  // changeCountry(e: any) {
  //   this.searchForm.value'country'].setValue(e.target.value, {
  //     onlySelf: true,
  //   });
  // }

  search() {
    
    alert(this.searchForm.value.country);
    alert(this.searchForm.value.location);
    alert(this.searchForm.value.eventDate);
    
    this.venueService.searchEventVenues(this.searchForm).subscribe( data => {
      console.log(data);
      data.forEach(event => {
       this.events.push(event);
      })
     
    });

    this.router.navigate(['home']);
    
  }

}
