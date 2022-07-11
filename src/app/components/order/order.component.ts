import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private bookService:BookService, private orderService:OrderService) {
    
   }

  ngOnInit(): void {
  }

}
