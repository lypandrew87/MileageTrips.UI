import { Injectable } from '@angular/core';
import {Hotel} from './hotel.model';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'

@Injectable()
export class HotelService {

  constructor(private http : HttpClient) { }

  getAllHotels() {
   return this.http.get("http://milagetrips.somee.com/MilageTrips/Hotels/")
    .map(res => res['Hotels']);
  }
}
