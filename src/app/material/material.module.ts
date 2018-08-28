import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatToolbarModule,  MatProgressBarModule, MatSliderModule, MatListModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatSliderModule,
    MatListModule
  ],
  exports : [
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatSliderModule,
    MatListModule,

  ],
  declarations: []
})
export class MaterialModule { }
