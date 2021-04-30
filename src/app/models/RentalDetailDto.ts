export interface RentalDetailDto {
  id: number;
  brandName: string;
  carName: string;
  modelYear: number;
  customerName: string;
  dailyPrice: number;
  rentDate: Date;
  returnDate: Date;
}
