import { Component, Input } from '@angular/core';
import { EventModel } from '../../model/event-model.model';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule,FormsModule, NgIf, UpperCasePipe],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

  @Input() event?: EventModel;

}
