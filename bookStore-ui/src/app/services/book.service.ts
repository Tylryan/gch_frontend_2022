import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IBook } from '../book';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}; 
@Injectable({
  providedIn: 'root'
})
export class BookService {

   private baseURL= "http://localhost:8080/api/v1/books";
  constructor(private http:HttpClient) { }
   
  getBooks(): any {
    return [
      { id:1,name:"Angular for Dummies",  description:' The best books', price:35 ,isbn:'isbn-123', language:'English',author_id:34 ,authorName:'Amy',publisher_id:2 ,publisherName: 'Best Authors',imageUrl:'assets/images/angular.png'},
      { id:2,name:"Java programming ",  description:' Java books', price:35 ,isbn:'isbn-123', language:'English',author_id:5 ,authorName:'Bob',publisher_id:2 ,publisherName: 'Best Authors',imageUrl:'assets/images/angular.png'},
      { id:3,name:"Advanced Machin learning",  description:' The best books in machin learning', price:35 ,isbn:'isbn-123', language:'English',author_id:6 ,authorName:'Thony',publisher_id:2 ,publisherName: 'Best Authors',imageUrl:'assets/images/angular.png'}
    ];
  };
  
 /*
  getBooks():Observable<IBook[]> {
    return this.http.get<IBook[]> (`${this.baseURL}`);
  }
  */

  getBooksById(id:number):Observable<IBook |undefined> {
    return this.getBooks()
                .pipe(
                  map((books:IBook[]) => books.find(b=>b.id==id))
                  );
  }
  
 
  
/*
  getBooksById(id:number):Observable<IBook[]> {
    return this.http.get<Book[]> (`${this.baseURL}/{id}`);
  }
  */

  updateBook(id:number,book:IBook):Observable<object>{
     return this.http.put(`${this.baseURL}/{id}`,book);
  }
  
  
}
