import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { Temperature } from '../temperature';
import { TemperatureService} from '../temperature.service';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-temperature-form',
  templateUrl: './temperature-form.component.html',
  styleUrls: ['./temperature-form.component.css']
})
export class TemperatureFormComponent implements OnInit {

  constructor(private temperatureService: TemperatureService, private messagesService: MessagesService) { }

  model = new Temperature('', null, 0);

  ngOnInit() {
  }

  add(): void {
    this.temperatureService.addTemperature(this.model)
      .subscribe(savedTemperature => {
        console.log('new temp saved!');
        console.log(savedTemperature);
        this.messagesService.newTemperatureInserted('all');
      });
  }

}
