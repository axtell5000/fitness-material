import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  // for lazy loading, #TrainingModule is to target class inside training ,module file
  { path: 'training', loadChildren: './training/training.module#TrainingModule', canLoad: [AuthGuard]}
];

// Injecting service here, the whole app doesnt need to know this
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
