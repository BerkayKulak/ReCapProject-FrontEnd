import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cardto } from 'src/app/models/cardto';
import { Rental } from 'src/app/models/rental';
import { Rentaldto } from 'src/app/models/rentaldto';
import { CardtoService } from 'src/app/services/cardto.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  rentalsDto: Rentaldto[] = [];
  carDto: Cardto[] = [];
  rental: Rental;
  dataLoaded = false;
  defaultPath = 'https://localhost:44322/Images/';
  carId:number;


  constructor(
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private cardtoService: CardtoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carId = this.activatedRoute.snapshot.params["carId"]


    this.activatedRoute.params.subscribe((params) => {
     
      if (params['carId']) {
        this.getCarDetailsbyCarId(params['carId']);
        console.log("sfdgsdg")
      }
    });

    this.getAll();
    console.log("xxxx")
    this.getRentalDetails();
  }

  getCarDetailsbyCarId(cardId: number) {
    this.cardtoService.getCarDetailsbyCarId(cardId).subscribe((response) => {
      this.carDto = response.data;

      console.log(this.carDto);
    });
  }

  getRentalDetails() {
    this.rentalService.getRentalDetails().subscribe((response) => {
      this.rentalsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getAll() {
    this.rentalService.getAll().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

  endRental(rental: Rental) {
    this.rentalService.endRental(rental).subscribe(
      (response) => {
        this.rental = response.data;
        this.toastrService.success(response.message);
        this.getAll();
      },
      (HttpErrorResponse) => {
        this.toastrService.error(HttpErrorResponse.error.message, 'Hata');
      }
    );
  }

  delete(rental: Rental) {
    this.rentalService.delete(rental).subscribe((response) => {
      this.rental = response.data;
      console.log(response.data);
      this.toastrService.success(response.message);
      this.getAll();
    });
  }
}
