import { Component, OnInit } from '@angular/core';
import { products } from '../products';


@Component({
  selector: 'app-travels-page',
  templateUrl: './travels-page.component.html',
  styleUrls: ['./travels-page.component.css']
})
export class TravelsPageComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
