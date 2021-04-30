import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CarDetailDto } from '../models/cardetaildto';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/cardetail';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44322/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'products/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'products/getcarsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'products/getcarsbycolorid?colorid=' + colorId;
    console.log(this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath));
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetails(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'products/getcardetailsbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarImages(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'CarImage/getallimages';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  GetCarsBrandAndColor(brandId: number, colorId: number) {
    let newPath =
      this.apiUrl +
      'products/getdtobrandandcolorid?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
