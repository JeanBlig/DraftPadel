import { Component, input, output } from '@angular/core';

interface TimeSlot {
  id: string;
  label: string;
}

@Component({
  selector: 'app-time',
  standalone: true,
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
  title = input('Time');
  selectedSlot = input<string | null>(null);
  slotSelected = output<string>();
  slots: TimeSlot[] = [
    { id: '08:00-09:00', label: '08:00 - 09:00' },
    { id: '09:00-10:00', label: '09:00 - 10:00' },
    { id: '10:00-11:00', label: '10:00 - 11:00' },
    { id: '11:00-12:00', label: '11:00 - 12:00' },
    { id: '12:00-13:00', label: '12:00 - 13:00' },
    { id: '13:00-14:00', label: '13:00 - 14:00' },
    { id: '14:00-15:00', label: '14:00 - 15:00' },
    { id: '15:00-16:00', label: '15:00 - 16:00' }
  ];

  selectSlot(slot: TimeSlot): void {
    this.slotSelected.emit(slot.id);
  }

  isSelected(slot: TimeSlot): boolean {
    return this.selectedSlot() === slot.id;
  }
}
