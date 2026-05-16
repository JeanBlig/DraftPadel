import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CourtComponent } from '../../components/court/court.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CalendarComponent, CourtComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {}
