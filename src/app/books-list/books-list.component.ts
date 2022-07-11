import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books:Book[] =[];
  pageEvent!: PageEvent;
  
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getBooksPerPage(0);
  }

  ngAfterViewInit() {
  
    }

  getBooksPerPage(event: (PageEvent | number)){
    if(typeof event == 'number'){
      console.log(event);
      
      this.bookService.getAllBooks(event).subscribe((response)=>{
        console.log(response);
        this.books = response;
      })
    } else {
      this.bookService.getAllBooks(event.pageIndex).subscribe((response)=>{
        console.log(response);
        this.books = response;
      })
    }
   
  }

}
