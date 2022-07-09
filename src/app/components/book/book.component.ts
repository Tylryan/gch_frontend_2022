import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  
  constructor() { }
  books = [
    { id:1,title:"Angular for Dummies",  description:' The best books', price:35 ,isbn:'isbn-123', language:'English',author_id:34 ,authorName:'Amy',publisher_id:2 ,publisherName: 'Best Authors'},
    { id:2,title:"Java programming ",  description:' Java books', price:35 ,isbn:'isbn-123', language:'English',author_id:5 ,authorName:'Bob',publisher_id:2 ,publisherName: 'Best Authors'},
    { id:3,title:"Advanced Machin learning",  description:' The best books in machin learning', price:35 ,isbn:'isbn-123', language:'English',author_id:6 ,authorName:'Thony',publisher_id:2 ,publisherName: 'Best Authors'}
  ];

  selectedBook?:any;
  ngOnInit(): void{
  }

  onSelect(book:any):void{
    this.selectedBook=book;
  }
  
 /* getBooks(){
    this.bookService.getBooks().subscribe(
      data=>{this.books=data},
      err=>{
        return console.error(err);
      },
      () =>console.log('books loaded')
    );
  } */
}
