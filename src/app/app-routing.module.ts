import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFundComponent } from './components/not-fund/not-fund.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ChampsComponent } from './components/champs/champs.component';
import { ChampionsComponent } from './components/champs/champions/champions.component';
import { ChampionsMaestryComponent } from './components/champs/champions-maestry/champions-maestry.component';


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
    path: 'champ',
    component: ChampsComponent,
    children: [
      {
        path: 'champions',
        component: ChampionsComponent,
        pathMatch: 'full'
      },
      {
        path: 'championsMaestry',
        component: ChampionsMaestryComponent,
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
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
