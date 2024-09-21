import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SeatBookingComponent } from './seat-booking.component';

import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { SeatDisplayComponent } from './seat-display.component';  // Import the component


import { HelloComponent } from './hello.component';  // Adjust the path if needed

@NgModule({
  declarations: [
    AppComponent,
    SeatBookingComponent,
    SeatDisplayComponent,
    HelloComponent  // <-- Declare HelloComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
