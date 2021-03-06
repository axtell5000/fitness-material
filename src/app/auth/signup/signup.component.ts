import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  maxDate;
  isLoading = false;
  private loadingSubscription: Subscription;

  constructor(private authService: AuthService, private uiService: UIService) { }

  ngOnInit() {
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

}
