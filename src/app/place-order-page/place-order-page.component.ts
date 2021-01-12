import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuConnectionServiceService } from '../menu-connection-service.service';
import { Menu } from '../types'; 

@Component({
  selector: 'app-place-order-page',
  templateUrl: './place-order-page.component.html',
  styleUrls: ['./place-order-page.component.css']
})
export class PlaceOrderPageComponent implements OnInit {
  email: string = '';
  address: string = '';
  name: string = '';
  phone: string = '';
  notes: string = '';
  menu: Menu;
  id: string = '';
  constructor(private route: ActivatedRoute, private router: Router,
    private _connection: MenuConnectionServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._connection.fetchMenuById(id).subscribe(
      data=> {
              console.log('Data received');
              this.menu=data;
              this.notes = `Please call when my ${this.menu.name.toLowerCase()} has been dispatched.`;
             },
      error=> console.log('An error was encountered')
    )
    
    
  }

  placeOrder(): void {
    alert('Your order has been placed, you will recieve a call from our agent shortly.');
    this.router.navigateByUrl('/service/:id');
  }

}
