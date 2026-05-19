import { Component } from '@angular/core';
import { BookingComponent } from '../../components/booking/booking.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CourtComponent } from '../../components/court/court.component';
import { TimeComponent } from '../../components/time/time.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookingComponent, CalendarComponent, CourtComponent, TimeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedDate: Date | null = null;
  selectedTimeSlot: string | null = null;
  selectedCourtType: string | null = null;

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    this.selectedTimeSlot = null;
  }

  onTimeSlotSelected(slot: string): void {
    this.selectedTimeSlot = slot;
  }

  onCourtTypeSelected(courtType: string | null): void {
    this.selectedCourtType = courtType;
  }
}
