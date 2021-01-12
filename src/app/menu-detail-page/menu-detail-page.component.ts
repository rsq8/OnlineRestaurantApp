import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute ,Router } from '@angular/router';
import { MenuConnectionServiceService } from '../menu-connection-service.service';
import { Menu } from '../types';

@Component({
  selector: 'app-menu-detail-page',
  templateUrl: './menu-detail-page.component.html',
  styleUrls: ['./menu-detail-page.component.css']
})
export class MenuDetailPageComponent implements OnInit {
  menu: Menu;
  id: string = '';
  name: string = '';
  description: string = '';
  price: string = '';
  
  constructor(private router: Router, private route: ActivatedRoute, 
            private _connection: MenuConnectionServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.menu = {id: this.id, name: this.name, description: this.description, price: this.price};
    this._connection.fetchMenuById(id).subscribe(
      data=> {
              console.log('Data received');
              this.menu=data;
             },
      error=> console.log('An error was encountered')
    )
  }

}
