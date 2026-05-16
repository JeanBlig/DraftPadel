import { Component, input } from '@angular/core';

@Component({
  selector: 'app-time',
  standalone: true,
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
  title = input('Time');
}
