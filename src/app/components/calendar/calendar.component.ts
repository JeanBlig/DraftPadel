import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild, input } from '@angular/core';

interface CalendarDay {
  label: string;
  date: Date;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  title = input('Calendar');
  days = this.buildScrollableDays();
  canScrollLeft = true;
  canScrollRight = true;

  @ViewChild('dayScroller')
  private dayScroller?: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const container = this.dayScroller?.nativeElement;

    if (!container) {
      return;
    }

    container.scrollLeft = this.getDayWidth(container) * 2;
    this.updateScrollState();
  }

  scrollDays(direction: 'left' | 'right'): void {
    const container = this.dayScroller?.nativeElement;

    if (!container) {
      return;
    }

    const amount = this.getDayWidth(container);

    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
    window.setTimeout(() => this.updateScrollState(), 250);
  }

  updateScrollState(): void {
    const container = this.dayScroller?.nativeElement;

    if (!container) {
      return;
    }

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const tolerance = 4;

    this.canScrollLeft = container.scrollLeft > tolerance;
    this.canScrollRight = container.scrollLeft < maxScrollLeft - tolerance;
  }

  private buildScrollableDays(): CalendarDay[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    today.setDate(today.getDate() - 7);

    return Array.from({ length: 15 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);

      return {
        label: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date
      };
    });
  }

  private getDayWidth(container: HTMLDivElement): number {
    return container.scrollWidth / this.days.length;
  }
}
