import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations.component';
import { PresentationsRoutingModule } from './presentations-routing.module';



@NgModule({
  declarations: [PresentationsComponent],
  imports: [
    CommonModule,
    PresentationsRoutingModule,
  ]
})
export class PresentationsModule { }
