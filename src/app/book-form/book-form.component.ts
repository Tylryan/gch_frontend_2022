import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  model = {id:null, name: null, description: null, 
    price:null,isbn:null,langauage:null,language: null,author_id:null,
    authorName:null,publisher_id:null ,publisherName:null};
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    if(this.model.id){
      //Save new book
    } else {
      //Update existing book
    }
     this.router.navigate(['/']);

  }

}
