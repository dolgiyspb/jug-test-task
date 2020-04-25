import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations.component';
import { PresentationsRoutingModule } from './presentations-routing.module';
import { PresentationsDataService } from './services/presentations-data.service';
import { PresentationListComponent } from './components/presentation-list/presentation-list.component';
import { PresentationItemComponent } from './components/presentation-item/presentation-item.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterFormComponent } from './components/filter-form/filter-form.component';



@NgModule({
  declarations: [PresentationsComponent, PresentationListComponent, PresentationItemComponent, CheckboxGroupComponent, FilterFormComponent],
  imports: [
    CommonModule,
    PresentationsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    PresentationsDataService,
  ]
})
export class PresentationsModule { }
