import { Component } from '@angular/core';
import { SeatService } from './seat.service';

@Component({
  selector: 'app-seat-display',
  templateUrl: './seat-display.component.html',
  styleUrls: ['./seat-display.component.css'],
})
export class SeatDisplayComponent {
  seats: boolean[] = [];

  constructor(private seatService: SeatService) {
    this.seats = this.seatService.getSeatStatus();  // Fetch seat status from service
  }

  getSeatClass(seat: boolean): string {
    return seat ? 'booked' : 'available';  // Apply CSS classes based on booked status
  }
}
