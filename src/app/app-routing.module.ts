import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFundComponent } from './components/not-fund/not-fund.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChampsComponent } from './components/champs/champs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'champions',
    component: ChampsComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    // redirectTo: '/dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    // children: []
  },
  {
    path: '**',
    component: NotFundComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
