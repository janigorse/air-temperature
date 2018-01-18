import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { TemperatureFormComponent } from './temperature-form/temperature-form.component';
import { PlotComponent } from './plot/plot.component';
import { FilterComponent } from './filter/filter.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TemperatureService } from './temperature.service';


@NgModule({
  declarations: [
    AppComponent,
    TemperatureFormComponent,
    PlotComponent,
    FilterComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
