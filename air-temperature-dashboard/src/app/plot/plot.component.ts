import { Component, OnInit, Input } from '@angular/core';

import { Temperature } from '../temperature';
import { ChartComponent } from 'angular2-chartjs';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {
  constructor() { }

  @Input() temperatures: Temperature[];
  @Input() chart: ChartComponent;
  
  ngOnInit() {
  }



}
