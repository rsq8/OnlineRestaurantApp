import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../types';
import { MenuConnectionServiceService } from '../menu-connection-service.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  menu: Menu[]=[];
  
  constructor(private _connection: MenuConnectionServiceService, 
              private router 
              : ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this._connection.fetchMenuFromBackend().subscribe(
      data=> {
              console.log("response received");
              this.menu=data;
             },
      error=> console.log("An error occured")
    )
    
  }

}
