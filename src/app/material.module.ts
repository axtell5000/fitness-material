import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

// @MgModule - decorator to tell angular this is a module
@NgModule({
  imports: [MatButtonModule, MatIconModule],
  exports: [MatButtonModule, MatIconModule]
})
export class MaterialModule {}