import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  product: any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product: any) {
    window.alert("Your travel offer has been added to the cart!");
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: any = params.get("productId");
      this.product = products[id];
    });
  }

}
