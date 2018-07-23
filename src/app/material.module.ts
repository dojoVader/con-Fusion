import { NgModule } from '@angular/core';
import {MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})

export class MaterialModule {}
