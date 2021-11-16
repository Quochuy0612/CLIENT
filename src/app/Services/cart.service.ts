import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(id: string, qty?: string) {
    let i = 0;
    if (!window.localStorage.getItem("Cart")) {
      const Cart = [
        {
          id: id,
          qty: 1
        },
      ]
      window.localStorage.setItem("Cart", JSON.stringify(Cart));
    } else {
      let cart = JSON.parse(window.localStorage.getItem("Cart"));
      cart.forEach(element => {
        if (element.id == id) {
          element.qty++;
          i++;
          window.localStorage.setItem("Cart", JSON.stringify(cart));
        }
      });
      if (i == 0) {
        cart.push({ id: id, qty: 1 });
        window.localStorage.setItem("Cart", JSON.stringify(cart));
      }
    }
  }
  updateCart(id:string, qty:string){
    let i = 0;
    let cart = JSON.parse(window.localStorage.getItem("Cart"));
      cart.forEach(element => {
        if (element.id == id) {
          element.qty = qty;
          i++;
          window.localStorage.setItem("Cart", JSON.stringify(cart));
        }
      });
  }
  removeItem(id: string){
    let i=0;
    let cart = JSON.parse(window.localStorage.getItem("Cart"));
    cart.forEach(element => {
      if(element.id == id){
      cart.splice(i, 1);
      }
      i++;
    });
    window.localStorage.setItem("Cart", JSON.stringify(cart));
  }
}
