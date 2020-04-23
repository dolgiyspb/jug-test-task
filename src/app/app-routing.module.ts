import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'presentations',
        pathMatch: 'full',
      },
      {
        path: 'presentations',
        loadChildren: () => import('./presentations/presentations.module').then(m => m.PresentationsModule),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'presentations',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
