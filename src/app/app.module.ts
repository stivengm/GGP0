import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ExamModule } from './exam/exam.module';
// import { ProductRoutingModule } from './product/product-routing.module';
// import { ProductModule } from './product/product.module';
// import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFundComponent } from './not-fund/not-fund.component';
// import { NotFoundService } from './services/not-found.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // ProductRoutingModule,
    // ExamModule,
    // ProductModule,
    // the root routing module must on the end of this array
    AppRoutingModule
  ],
  // providers: [NotFoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
