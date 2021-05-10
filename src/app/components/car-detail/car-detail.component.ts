import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Cardto } from 'src/app/models/cardto';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CardtoService } from 'src/app/services/cardto.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDto: Cardto[] = [];
  car: Car;


  defaultPath = 'https://localhost:44322/Images/';

  constructor(
    private carService: CarService,
    private cardtoService: CardtoService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsbyCarId(params['carId']);
      }
    });
  }

  getCarDetailsbyCarId(cardId: number) {
    this.cardtoService.getCarDetailsbyCarId(cardId).subscribe((response) => {
      this.carDto = response.data;

      console.log(this.carDto);
    });
  }

  addToCart(car:Cardto){
    
    this.toastrService.success("Sepete eklendi",car.carName)
  }
}
