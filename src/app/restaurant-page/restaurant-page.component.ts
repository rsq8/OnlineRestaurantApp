import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeRestaurants } from '../fake-data';
import { Options } from  '../types';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {
  restaurant: Options [] = [];

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.restaurant = fakeRestaurants;
  }

}
