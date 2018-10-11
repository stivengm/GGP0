import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFundComponent } from './not-fund/not-fund.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChampsComponent } from './champs/champs.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '/dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    // children: []
  },
//   {
//     path: '**',
//     component: NotFundComponent,
//     pathMatch: 'full'
//   },
  {
    path: 'champions',
    component: ChampsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
