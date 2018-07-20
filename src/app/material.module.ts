import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule
  ]
})

export class MaterialModule {}
