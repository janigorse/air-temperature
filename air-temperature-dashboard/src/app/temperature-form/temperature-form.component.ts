import { Component, OnInit } from '@angular/core';
import { Temperature } from '../temperature';

@Component({
  selector: 'app-temperature-form',
  templateUrl: './temperature-form.component.html',
  styleUrls: ['./temperature-form.component.css']
})
export class TemperatureFormComponent implements OnInit {

  constructor() { }

  model = new Temperature('', null, 0);

  ngOnInit() {
  }

}
