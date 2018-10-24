import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Services
import { DataProfileService } from './data-profile.service';
import { HttpClientModule } from '@angular/common/http';
import { NotFundService } from './services/not-fund.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ExamModule } from './exam/exam.module';
// import { ProductRoutingModule } from './product/product-routing.module';
// import { ProductModule } from './product/product.module';
// import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFundComponent } from './components/not-fund/not-fund.component';
import { ChampsComponent } from './components/champs/champs.component';
import { FooterComponent } from './header/footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ChampionsComponent } from './components/champs/champions/champions.component';
import { ChampionsMaestryComponent } from './components/champs/champions-maestry/champions-maestry.component';
// import { NotFoundService } from './services/not-found.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFundComponent,
    ChampsComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    AboutComponent,
    ChampionsComponent,
    ChampionsMaestryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    // ProductRoutingModule,
    // ExamModule,
    // ProductModule,
    // the root routing module must on the end of this array
    AppRoutingModule
  ],
  providers: [DataProfileService, NotFundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
