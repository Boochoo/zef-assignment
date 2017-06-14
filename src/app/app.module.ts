import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { Location } from '@angular/common'

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnnualComponent } from './annual/annual.component';
import { OrderComponent } from './order/order.component';
import { MonthlyComponent } from './monthly/monthly.component';

import { PlanService } from './shared/plan.service'

const routes:Routes = [
  {
    path: '',
    component: HomeComponent, children: [
    {
      path: '',
      redirectTo: 'annual',
      pathMatch: 'full'
    },
    {
      path: 'monthly',
      component: MonthlyComponent
    },
    {
      path: 'annual',
      component: AnnualComponent
    }
  ]
  },
  {
    path: 'order/:id/:param',
    component: OrderComponent
  },
  {
    path: '*',
    redirectTo: 'annual'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnualComponent,
    OrderComponent,
    MonthlyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
