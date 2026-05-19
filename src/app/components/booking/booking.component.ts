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

  get eventDescriptionTitle(): string {
    const court = this.selectedCourt();

    if (court === 'Full Court') {
      return 'Full Court Booking';
    }

    if (court) {
      return 'Challenge Booking';
    }

    return 'Event Type';
  }

  get eventDescriptionText(): string {
    const court = this.selectedCourt();

    if (court === 'Full Court') {
      return 'You are reserving the entire court for a private booking at your selected day and time.';
    }

    if (court) {
      return `You are creating a ${court.toLowerCase()} event. This will announce an open challenge instead of reserving the full court.`;
    }

    return 'Choose a court setup to see whether this booking will create an open challenge or reserve the full court.';
  }
}
