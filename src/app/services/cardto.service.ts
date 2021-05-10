import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

import { Cardto } from '../models/cardto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CardtoService {
  apiUrl = 'https://localhost:44322/api/';
  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModel<Cardto>> {
    let newPath = this.apiUrl + 'products/getcardetails';
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }

  getCarDetailsbyCarId(carId: number): Observable<ListResponseModel<Cardto>> {
    let newPath = this.apiUrl + 'products/getcardetailsbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Cardto>> {
    let newPath = this.apiUrl + 'products/getcarsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Cardto>> {
    let newPath = this.apiUrl + 'products/getcarsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }
}