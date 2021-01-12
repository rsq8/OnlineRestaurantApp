// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';
// import { Menu } from '../types'; 
// import { MenuConnectionServiceService } from '../menu-connection-service.service';

// @Component({
//   selector: 'app-add-data-form',
//   templateUrl: './add-data-form.component.html',
//   styleUrls: ['./add-data-form.component.css']
// })
// export class AddDataFormComponent implements OnInit {
//   menu: Menu;
//   @Input() buttonText;
//   @Input() currentId = '';
//   @Input() currentName = '';
//   @Input() currentDescription = '';
//   @Input() currentPrice = '';
//   id: string = '';
//   name: string = '';
//   description: string = '';
//   price: string = '' ;
//   @Output() onSubmit = new EventEmitter<Menu>();

//   constructor(private router: Router, private _connection: MenuConnectionServiceService) { }

//   ngOnInit(): void {
//     this.id = this.currentId;
//     this.name = this.currentName;
//     this.description = this.currentDescription;
//     this.price = this.currentPrice;
//   }

//   onButtonClicked(): void{
//     this.onSubmit.emit({
//       id: this.id,
//       name: this.name,
//       description: this.description,
//       price: this.price
//     });
//   }

// }
