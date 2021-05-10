import { Injectable } from '@angular/core';
import { Cardto } from '../models/cardto';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(car: Cardto) {
    let item = CartItems.find((c) => c.car.carId === car.carId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }

  }

  list():CartItem[]{
    return CartItems;
  }
}
