import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatToolbarModule,  MatProgressBarModule, MatSliderModule, MatListModule, MatGridListModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatSliderModule,
    MatListModule,
    MatGridListModule
  ],
  exports : [
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatSliderModule,
    MatListModule,
    MatGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
