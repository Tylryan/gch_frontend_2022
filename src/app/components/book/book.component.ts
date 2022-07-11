import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(private bookService:BookService,private router:Router) { }
  books : any=[]

  selectedBook?:any;
  ngOnInit(): void{
    this.books=this.bookService.getBooks();
  }

  onSelect(book:any):void{
    this.selectedBook=book;
  }
  onDelete(book: any):void{
   // this.books=this.books.filter(b=>b.id !=book.id);
    //todo call the backedn delete 
  }
  
  bookDetails(id:number){
    this.router.navigate(['/book',id]);
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
