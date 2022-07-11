import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router) { }
    model = {id:null,firstName:null, lastName:null, address:null, email:null,CreditCard:null};
  ngOnInit(): void {
  }

  onSubmit(): void{
   // if(this.model.id){
      //Save new customer
   // } else {
      //Update existing book
   // }
     this.router.navigate(['/order']);

  }

}
