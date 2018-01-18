import { Component, OnInit } from '@angular/core';
import {TemperatureService} from '../temperature.service';
import { Temperature } from '../temperature';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  constructor(private temperatureService: TemperatureService) { }

  temperatures: Temperature[];
  chart = [];
  
  ngOnInit() {
    this.temperatureService.getTemperatures()
    .subscribe(temperatures => {
        this.temperatures = temperatures;
        /*
        let temperatureDates = [];
        let temperatureValues = [];
        this.temperatures.forEach((temperature)=> {
          if (temperature.location == 'London')
          {
            let jsdate = new Date(temperature.date)  
            temperatureDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
            temperatureValues.push(temperature.temperature);
          }
          
        });

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: temperatureDates,
            datasets: [
              {
                label: 'London',
                data: temperatureValues,
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
        */
      }
    );
  }



}
