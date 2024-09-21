import { Component } from '@angular/core';
import { SeatService } from './seat.service';
import { Component } from '@angular/core';
import { SeatService } from './seat.service';  // <-- Correct the import path here


@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'],
})
export class SeatBookingComponent {
  numberOfSeats: number = 0;
  bookedSeats: number[] = [];

  constructor(private seatService: SeatService) {}

  bookSeats() {
    if (this.numberOfSeats > 0 && this.numberOfSeats <= 7) {
      this.bookedSeats = this.seatService.bookSeats(this.numberOfSeats);
    } else {
      alert('You can only book between 1 and 7 seats');
    }
  }

  getSeatStatus() {
    return this.seatService.getSeatStatus();
  }
}
