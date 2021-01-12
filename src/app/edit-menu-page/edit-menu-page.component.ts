import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute ,Router } from '@angular/router';
import { MenuConnectionServiceService } from '../menu-connection-service.service';
import { Menu } from '../types';
import { fakeMyMenu } from '../fake-data';

@Component({
  selector: 'app-edit-menu-page',
  templateUrl: './edit-menu-page.component.html',
  styleUrls: ['./edit-menu-page.component.css']
})
export class EditMenuPageComponent implements OnInit {
  menu: Menu;
  id: string = '';
  name: string = '';
  description: string = '';
  price: string = '';
  
  constructor(private router: Router, private route: ActivatedRoute, 
            private _connection: MenuConnectionServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.menu = {id: this.id, name: this.name, description: this.description, price: this.price};
    this._connection.fetchMenuById(id).subscribe(
      data=> {
              console.log('Data received');
              this.menu=data;
             },
      error=> console.log('An error was encountered')
    )
  }

  onSubmit(): void {
    this._connection.addFoodToMenu(this.menu).subscribe(
      data=>{
              console.log(`menu updated`);
              this.router.navigateByUrl('/my-menu');
            },

      error=> console.log("An error was encountered")
    )
  }

}
