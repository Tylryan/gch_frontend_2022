import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  pageTitle : string = 'Product detail';
  book:any=[];


  constructor(private route: ActivatedRoute,
              private bookService:BookService,
              private router:Router) {
    

    // if the product has to be changed with back and forth arrow 
    //this.route.paramMap.subscribe(params=>console.log(params.get('id')))
   };

  ngOnInit(): void {

   const id= Number(this.route.snapshot.paramMap.get('id'));
    if(id){
        this.getBook(id);
    }
   }
  

  getBook(id:number): void{
    this.bookService.getBooksById(id).subscribe({
      next: book=> this.book = book
    });
      
  }

}
