import { Component, Input } from '@angular/core';
import { EventsService } from '../../service/events.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-venues',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  providers:[EventsService],
  templateUrl: './display-venues.component.html',
  styleUrl: './display-venues.component.css'
})
export class DisplayVenuesComponent {

  @Input() eventId: number = 0;

  constructor(private eventService: EventsService){}



}
