import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 public books: any;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }
  
  getBooks(){
  
  }

}
