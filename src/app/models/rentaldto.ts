export interface Rentaldto{
  id:number;
  carId:number;
  modelYear:number;
  description:number;
  dailyPrice:number;
  customerId:number;
  brandName:String;
  carName:String;
  firstName:String;
  lastName:String;
  companyName:String;
  rentDate:Date;
  returnDate?:Date;
}
