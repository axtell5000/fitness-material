import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

// A service where we put our logic for the App, split it by features
// This service is for generating snackbar when needed across app

@Injectable()
export class UIService {
  constructor(private snackbar: MatSnackBar) {}

  // making a generic method for snackbars across app
  showSnackbar(message, action, duration) {
    this.snackbar.open(message, action, {
      duration: duration
    });
  }
}
