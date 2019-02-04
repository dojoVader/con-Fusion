import { NgModule } from '@angular/core';
import {MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatButtonModule, MatInputModule,
MatOptionModule,
MatSelectModule, MatAutocompleteModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule
  ]
})

export class MaterialModule {}
