import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Temperature } from './temperature';

@Injectable()
export class MessagesService {

  private messageSource = new BehaviorSubject<string>("");
  private insertedSource = new BehaviorSubject<string>("");
  selectedLocation = this.messageSource.asObservable();
  insertedTemperature = this.insertedSource.asObservable();

  constructor() { }

  changeLocation(location: string) {
    this.messageSource.next(location);
  }

  newTemperatureInserted(location: string) {
    this.insertedSource.next(location);
  }

}
