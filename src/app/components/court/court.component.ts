import { Component, input } from '@angular/core';

@Component({
  selector: 'app-court',
  standalone: true,
  templateUrl: './court.component.html',
  styleUrl: './court.component.css'
})
export class CourtComponent {
  title = input('Court');
  selectedSection: 'top' | 'bottom' | null = null;

  selectSection(section: 'top' | 'bottom'): void {
    this.selectedSection = section;
  }
}
