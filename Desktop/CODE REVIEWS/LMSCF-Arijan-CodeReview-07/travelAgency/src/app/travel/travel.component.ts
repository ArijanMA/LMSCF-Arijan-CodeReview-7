import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


import { offers } from '../traveloffers';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  offers;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }


addToCart(offers) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(offers);
 }


  ngOnInit() {
  this.route.paramMap.subscribe(params => {
  this.offers = offers[+params.get('offersId')];
  });
}

}
