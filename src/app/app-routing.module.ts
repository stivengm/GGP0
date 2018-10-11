import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFundComponent } from './not-fund/not-fund.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    children: []
  },
  {
    path: '**',
    component: NotFundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
