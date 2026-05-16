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

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    this.selectedTimeSlot = null;
  }

  onTimeSlotSelected(slot: string): void {
    this.selectedTimeSlot = slot;
  }

  get bookingSelection(): { date: string | null; timeSlot: string | null } {
    return {
      date: this.selectedDate ? this.toIsoDate(this.selectedDate) : null,
      timeSlot: this.selectedTimeSlot
    };
  }

  private toIsoDate(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
