import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';


// Even though its in the App Module. Modules dont filter down even to their children
// That why you may have to repeat some imports. Although this doesnt increase size of App at compilation


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireAuthModule,
  ]
})
export class AuthModule {}
