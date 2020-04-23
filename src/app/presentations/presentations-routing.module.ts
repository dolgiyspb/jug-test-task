import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationsComponent } from './presentations.component';


const routes: Routes = [
  {
    path: '',
    component: PresentationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationsRoutingModule { }
