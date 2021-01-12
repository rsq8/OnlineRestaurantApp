import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../types';
import { MenuConnectionServiceService } from '../menu-connection-service.service';

@Component({
  selector: 'app-new-menu-page',
  templateUrl: './new-menu-page.component.html',
  styleUrls: ['./new-menu-page.component.css']
})
export class NewMenuPageComponent implements OnInit {
  menu: Menu;
  id: string = '';
  name: string = '';
  description: string = '';
  price: string = '';
 
  constructor(private router: Router, private _connection: MenuConnectionServiceService) { }

  ngOnInit(): void {
    this.menu = {id: this.id, name: this.name, description: this.description, price: this.price};
  }

  onSubmit(): void{
    this._connection.addFoodToMenu(this.menu).subscribe(
      data=>{
              console.log(`Food item has been added to your menu`);
              this.router.navigateByUrl('/my-menu');
            },

      error=> console.log("An error was encountered")
    )
    
  }

}
