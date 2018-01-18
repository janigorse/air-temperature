import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http'

import { Temperature } from './temperature';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TemperatureService {
  private temperatureUrl = 'http://localhost:5000/api/temperature/'


  constructor(private http: HttpClient) { }

  getTemperatures(): Observable<Temperature[]> {
    return this.http.get<Temperature[]>(this.temperatureUrl);
  }

  addTemperature(temperature: Temperature): Observable<Temperature> {
    return this.http.post<Temperature>(this.temperatureUrl, temperature, httpOptions);
  }

}
