import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:8080/api/v1/";

  constructor(private http:HttpClient) { }

  

   getAllBooks(page:number): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl+`book?page=${page}&size=10`);  }
}
