import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations.component';
import { PresentationsRoutingModule } from './presentations-routing.module';
import { PresentationsDataService } from './services/presentations-data.service';



@NgModule({
  declarations: [PresentationsComponent],
  imports: [
    CommonModule,
    PresentationsRoutingModule,
  ],
  providers: [
    PresentationsDataService,
  ]
})
export class PresentationsModule { }
