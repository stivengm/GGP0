import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFundComponent } from './components/not-fund/not-fund.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ChampsComponent } from './components/champs/champs.component';
import { ChampionsComponent } from './components/champs/champions/champions.component';
import { ChampionsMaestryComponent } from './components/champs/champions-maestry/champions-maestry.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { HistoryChampsComponent } from './components/champs/history-champs/history-champs.component';


const routes: Routes = [
  {
    path: 'profilelol',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'forgot',
    component: ForgotPassComponent,
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
        path: 'historyChampions',
        component: HistoryChampsComponent,
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
