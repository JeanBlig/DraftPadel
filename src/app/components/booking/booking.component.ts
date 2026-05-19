import { Component, input } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  title = input('Booking');
  selectedDate = input<Date | null>(null);
  selectedTime = input<string | null>(null);
  selectedCourt = input<string | null>(null);

  get displayDate(): string {
    const date = this.selectedDate();

    if (!date) {
      return 'Select a day';
    }

    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  }

  get displayTime(): string {
    return this.selectedTime() ?? 'Select a time';
  }

  get displayCourt(): string {
    return this.selectedCourt() ?? 'Select a court';
  }

  get isBookingReady(): boolean {
    return Boolean(this.selectedDate() && this.selectedTime() && this.selectedCourt());
  }

  get bookingButtonLabel(): string {
    const court = this.selectedCourt();

    if (!court || court === 'Full Court') {
      return 'Confirm Booking';
    }

    return 'Announce Challenge';
  }
}
