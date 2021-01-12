import { Component, OnInit } from '@angular/core';
import { Options } from '../types';
import { fakeCities } from '../fake-data';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit {
  city: Options[] = [];

  constructor() { }

  ngOnInit(): void {
    this.city = fakeCities;
  }

}
