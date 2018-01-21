import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http'

import { Temperature, TemperatureGroup } from './temperature';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TemperatureService {
  private temperatureUrl = 'http://localhost:5000/api/temperature/'


  constructor(private http: HttpClient) { }

  getLocations():Observable<string[]> {
    return this.http.get<string[]>('http://localhost:5000/api/temperature/getlocations');
  }

  getTemperatures(): Observable<TemperatureGroup[]> {
    return this.http.get<TemperatureGroup[]>('http://localhost:5000/api/temperature/getall');
  }

  getTemperaturesByLocation(location: string):Observable<Temperature[]> {
    let params = new HttpParams().set("location",location);
    return this.http.get<Temperature[]>('http://localhost:5000/api/temperature/getallbylocation', {params: params});
  }

  addTemperature(temperature: Temperature): Observable<Temperature> {
    return this.http.post<Temperature>('http://localhost:5000/api/temperature/create', temperature, httpOptions);
  }

}
