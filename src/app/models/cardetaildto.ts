import { CarImage } from './carImage';

export interface CarDetailDto {
  carId: number;
  brandId: number;
  colorId: number;
  carName: string;
  brandName: string;
  colorName: string;
  modelYear: number;
  dailyPrice: number;
  description: string;
  imagePath: string;
  carImage: CarImage[];
}
