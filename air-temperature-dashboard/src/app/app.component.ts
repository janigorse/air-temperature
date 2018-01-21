import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import {TemperatureService} from './temperature.service';
import { Temperature, TemperatureGroup } from './temperature';
import {MessagesService} from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedLocation: string;
  temperatures: Temperature[];
  temperatureGroups: TemperatureGroup[];
  locations: Array<string>;
  title = 'Air Temperature';
  chart = [];

  constructor(
    private temperatureService: TemperatureService, 
    private messagesService: MessagesService){}

  ngOnInit() {
    this.temperatureService.getLocations().subscribe(locations => this.locations = locations);

    this.messagesService.selectedLocation.subscribe(selectedLocation => {
      this.selectedLocation = selectedLocation
      
      if (selectedLocation !== 'all')
      {
        this.temperatureService.getTemperaturesByLocation(selectedLocation)
          .subscribe(temperatures => {
            this.temperatures = temperatures;
            this.PrepareSelectedLocationDataForChart(this.temperatures, selectedLocation);
          });
      }
      else 
      {
        this.temperatureService.getTemperatures()
        .subscribe(temperatureGroups => {
          this.temperatureGroups = temperatureGroups;
          this.PrepareGroupDataForChart(temperatureGroups);
        });
      }
    });
    
    this.messagesService.insertedTemperature.subscribe(result => {
      console.log('insertedTemperature');
      this.temperatureService.getTemperatures()
        .subscribe(temperatureGroups => {
            this.temperatureGroups = temperatureGroups;
            this.PrepareGroupDataForChart(temperatureGroups);
        });
    });
    
  }

  private PrepareSelectedLocationDataForChart(temperatures: Temperature[], selectedLocation: string) {
    let temperatureDates = [];
    let temperatureValues = [];
    let locations = []
    let locationTemperaturesArray = [];
    
    this.temperatures.forEach((temperature)=> {
      let jsdate = new Date(temperature.date)  
      temperatureDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
      temperatureValues.push(temperature.temperature);
      
    });

    let locationTemperatures = {
      label: selectedLocation,
      data: temperatureValues,
      fill: false
    };
    locationTemperaturesArray.push(locationTemperatures);

    this.chart = this.RenderChart(temperatureDates, locationTemperaturesArray);
  }

  private PrepareGroupDataForChart(temperatureGroups: TemperatureGroup[]) {
    
    let locations = []
    let locationTemperaturesArray = [];
    let temperatureDates = [];

    this.temperatureGroups.forEach((temperatureGroup)=> {
      let temperatureValues = [];
      temperatureGroup.temperatureItems.forEach((temperature) => {
        temperatureDates.push(temperature.date)
      });
    });

    temperatureDates = Array.from(new Set(temperatureDates.sort()));

    this.temperatureGroups.forEach((temperatureGroup) => {
      let locationTemperature = {
        label: '',
        data: [],
        fill: false
      };

      locationTemperature.label = temperatureGroup.location;  //  London  
      temperatureDates.forEach((date)=> {
        let item = temperatureGroup.temperatureItems.find(x => x.date == date);
        if (item)
        {
          locationTemperature.data.push(item.temperature);
        }
        else 
        {
          locationTemperature.data.push(0);
        }
      });  
      locationTemperaturesArray.push(locationTemperature);  
    });
    
    this.chart = this.RenderChart(temperatureDates, locationTemperaturesArray);
  }
  private RenderChart(temperatureDates, locationTemperaturesArray): Chart 
  {
    return new Chart('canvas', {
      type: 'line',
      data: {
        labels: temperatureDates,
        datasets: locationTemperaturesArray
      },
      options: {
        legend: {
          display: true
        }
      }
    });
    
  };
  
  
}
