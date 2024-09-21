import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  seats: boolean[] = Array(80).fill(false); // Initialize 80 seats, all unbooked (false)

  // Function to book seats
  bookSeats(numberOfSeats: number): number[] {
    const bookedSeats: number[] = [];

    for (let i = 0; i < this.seats.length && bookedSeats.length < numberOfSeats; i++) {
      if (!this.seats[i]) {
        this.seats[i] = true;
        bookedSeats.push(i + 1); // Seat numbers are 1-indexed
      }
    }

    if (bookedSeats.length < numberOfSeats) {
      alert('Not enough seats available to fulfill your booking.');
    }

    return bookedSeats;
  }

  // Function to get seat status (whether booked or not)
  getSeatStatus(): boolean[] {
    return this.seats;
  }
}
