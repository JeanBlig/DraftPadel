import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CourtComponent } from '../../components/court/court.component';
import { TimeComponent } from '../../components/time/time.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalendarComponent, CourtComponent, TimeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
