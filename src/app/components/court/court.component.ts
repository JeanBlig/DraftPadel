import { Component, input, output } from '@angular/core';

type CourtSection = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

@Component({
  selector: 'app-court',
  standalone: true,
  templateUrl: './court.component.html',
  styleUrl: './court.component.css'
})
export class CourtComponent {
  title = input('Court');
  courtTypeSelected = output<string | null>();
  readonly sections: CourtSection[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  private readonly selectedSections = new Set<CourtSection>();

  get displayTitle(): string {
    return this.selectedCourtType ?? this.title();
  }

  get selectedCourtType(): string | null {
    switch (this.selectedSections.size) {
      case 1:
        return '1 Challenger';
      case 2:
        return '2 Challengers';
      case 3:
        return '3 Challengers';
      case 4:
        return 'Full Court';
      default:
        return null;
    }
  }

  get isFullCourtSelected(): boolean {
    return this.selectedSections.size === this.sections.length;
  }

  isSectionSelected(section: CourtSection): boolean {
    return this.selectedSections.has(section);
  }

  toggleSection(section: CourtSection): void {
    if (this.selectedSections.has(section)) {
      this.selectedSections.delete(section);
    } else {
      this.selectedSections.add(section);
    }

    this.courtTypeSelected.emit(this.selectedCourtType);
  }
}
