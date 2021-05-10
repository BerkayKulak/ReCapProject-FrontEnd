import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/car-image';
import { Cardto } from 'src/app/models/cardto';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CardtoService } from 'src/app/services/cardto.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  cardtos: Cardto[] = [];
  dataLoaded = false;
  carImages: CarImage[] = [];
  currentCar: Cardto;
  apiUrl = 'https://localhost:44322/Images/';
  defaultImage = '/Images/default.png';
  filterText = "";

  constructor(
    private carService: CarService,
    private cardtoService: CardtoService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.getCars();
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCarDetails();
      }
      if (params['carId']) {
        this.getCarDetailsbyCarId(params['carId']);
      }
    });
  }
  getCarsByBrandId(brandId: number) {
    this.cardtoService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cardtos = response.data;
      this.dataLoaded = true;
      console.log(this.cardtos);
    });
  }

  getCarsByColorId(colorId: number) {
    this.cardtoService.getCarsByColorId(colorId).subscribe((response) => {
      this.cardtos = response.data;
      this.dataLoaded = true;
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetails() {
    this.cardtoService.getCarDetails().subscribe((response) => {
      this.cardtos = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsbyCarId(cardId: number) {
    this.cardtoService.getCarDetailsbyCarId(cardId).subscribe((response) => {
      this.cardtos = response.data;
      this.dataLoaded = true;
      console.log(this.cardtos);
    });
  }

  setCurrentCar(car: Cardto) {
    this.currentCar = car;
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
      console.log(this.carImages);
    });
  }
}
