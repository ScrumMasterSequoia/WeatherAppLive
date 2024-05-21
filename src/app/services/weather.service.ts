import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl+'/city/'+cityName+'/EN', {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
    });
   }
}

// source: https://rapidapi.com/worldapi/api/open-weather13/

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://open-weather13.p.rapidapi.com/city/chattanooga/EN',
//   headers: {
//     'X-RapidAPI-Key': 'fb658f2d56mshf76f74046261130p153d7ejsnc1ea1faa95ac',
//     'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
