import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { SummaryPageAllComponent } from './summary-page/summary-page-all/summary-page-all.component';
import {HttpClientModule} from "@angular/common/http";
import { SummaryPageDetailsComponent } from './summary-page/summary-page-details/summary-page-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPageComponent,
    ListPageComponent,
    SummaryPageAllComponent,
    SummaryPageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
