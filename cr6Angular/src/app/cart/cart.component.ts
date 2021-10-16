import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any;
  checkoutForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: new FormControl(""),
      address: new FormControl(""),
      email: new FormControl(""),
      card: new FormControl("")

    });


  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: any) {
    window.alert("Paid");
    console.warn(customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}