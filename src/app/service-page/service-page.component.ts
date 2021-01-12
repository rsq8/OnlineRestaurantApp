import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeServices } from '../fake-data';
import { Options } from  '../types';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  service: Options [] = [];

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.service = fakeServices;
  }

}
