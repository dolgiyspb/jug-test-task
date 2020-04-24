import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations.component';
import { PresentationsRoutingModule } from './presentations-routing.module';
import { PresentationsDataService } from './services/presentations-data.service';
import { PresentationListComponent } from './components/presentation-list/presentation-list.component';
import { PresentationItemComponent } from './components/presentation-item/presentation-item.component';



@NgModule({
  declarations: [PresentationsComponent, PresentationListComponent, PresentationItemComponent],
  imports: [
    CommonModule,
    PresentationsRoutingModule,
  ],
  providers: [
    PresentationsDataService,
  ]
})
export class PresentationsModule { }
